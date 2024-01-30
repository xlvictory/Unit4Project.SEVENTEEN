import { useState } from 'react';
import React from 'react';
import NavContainer from './components/NavContainer';
import Navigations from './components/Navigations';
import 

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});
return (
  <>
  <div id='container'>
  <Navigations token={token} setToken={setToken} user={user} setUser={setUser} />
  <NavContainer token={token} setToken={setToken} user={user} setUser={setUser} />
  </div>
  </>
)
};

export default App
