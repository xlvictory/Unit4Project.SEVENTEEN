import { Routes, Route } from 'react-router-dom';
import Members from './Members';
import Albums from './Albums';
import MVs from './MVs';

export default function NavContainer() {
    return (
        <div id='nav-container'>
            <Routes>
                <Route path='/members' element={<Members />} />
                <Route path='/albums' element={<Albums />} />
                <Route path='/MVs' element={<MVs />} />
            </Routes>
        </div>
    )
}