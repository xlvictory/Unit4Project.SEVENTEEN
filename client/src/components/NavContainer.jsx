import { Routes, Route } from 'react-router-dom';
import Members from './Members';
import Albums from './Albums';
import MVs from './MVs';
import HomePage from './HomePage';
import SingleMember from './SingleMember';
import SingleAlbum from './SingleAlbum';
import Login from './Login';
import Register from './Register';
import Carat from './Carat';

export default function NavContainer({ token, setToken }) {
    return (
        <div id='nav-container'>
            <Routes>
                <Route path='/' element={<HomePage token={token} setToken={setToken} />} />
                <Route path='/members' element={<Members token={token} setToken={setToken} />} />
                <Route path='/albums' element={<Albums token={token} setToken={setToken} />} />
                <Route path='/MVs' element={<MVs token={token} setToken={setToken} />} />
                <Route path='/members/:mem_id' element={<SingleMember token={token} setToken={setToken} />} />
                <Route path='/albums/:album_id' element={<SingleAlbum token={token} setToken={setToken} />} />
                <Route path='/login' element={<Login token={token} setToken={setToken} />} />
                <Route path='/register' element={<Register token={token} setToken={setToken} />} />
                <Route path='/carat' element={<Carat token={token} setToken={setToken} />} />
            </Routes>
        </div>
    )
}
