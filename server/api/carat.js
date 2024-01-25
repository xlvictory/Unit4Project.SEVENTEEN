const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets');
const SALT = 10;


const { createUser, getCaratByUsername } = require('../db/helpers/carat');

// GET current user
router.get('/', async (req, res, next) => {
    try {
        const token = req.get('Authorization').split(' ')[1];
        const carat = jwt.verify(token, JWT_SECRET);

        delete carat.iat;
        res.send(carat);

    } catch (error) {
        next(error);
    }
});

// POST - create fanclub account
router.post('/register', async (req, res, next) => {
    try {
        const { first_name, username, email, password } = req.body;

        if (!username) {
            throw new Error('Username is required to create an account')
        } else if (!password) {
            throw new Error('Password is required to create an account')
        } else if (!email) {
            throw new Error('Email address is required to create an account')
        }

        const hashedPw = await bcrypt.hash(password, SALT);
        const carat = await createUser({ first_name, username, email, password: hashedPw });
        delete carat.password;

        const token = jwt.sign(carat, JWT_SECRET)

        res.cookie("token", token, {
            sameSite: "strict",
            httpOnly: true,
            signed: true,
        });

        res.send({ token, carat })
    } catch (error) {
        next(error);
    }
});

// POST - login exisiting carat
router.post('/login', async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const carat = await getCaratByUsername(username);
        const validPw = await bcrypt.compare(password, carat.password);

        delete carat.password;

        if (!user) {
            throw new Error('Invalid username');
        } else if (!validPw) {
            throw new Error('Invalid password');
        }

        if (validPw) {
            const token = jwt.sign(carat, JWT_SECRET);

            res.cookie("token", token, {
                sameSite: "strict",
                httpOnly: true,
                signed: true,
            });
            res.send({ token, carat })
        }
    } catch (error) {
        next(error);
    }
});

module.exports = router;