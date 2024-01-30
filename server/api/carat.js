const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets');
const SALT = 10;
const { authRequired } = require('./utils');

const { getAllCarats, createUser, getCaratByUsername, getCaratById } = require('../db/helpers/carat');

// GET all carats
router.get('/', authRequired, async (req, res, next) => {
    try {
        const carat = await getAllCarats();
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

        if (!carat) {
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

//GET - get carat by id
router.get('/:id', async (req, res, next) => {
    try {
        const carat = await getCaratById(req.params.id);
        res.send(carat);
    } catch(error) {
        next(error);
    }
});

module.exports = router;