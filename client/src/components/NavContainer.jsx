import { Routes, Route } from 'react-router-dom';
import Members from './Members';
import Albums from './Albums';
import MVs from './MVs';
import HomePage from './HomePage';
import SingleMember from './SingleMember';
import SingleAlbum from './SingleAlbum';

export default function NavContainer() {
    return (
        <div id='nav-container'>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/members' element={<Members />} />
                <Route path='/albums' element={<Albums />} />
                <Route path='/MVs' element={<MVs />} />
                <Route path='/members/:mem_id' element={<SingleMember />} />
                <Route path='/albums/:album_id' element={<SingleAlbum />} />
            </Routes>
        </div>
    )
}
