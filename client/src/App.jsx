import { useState } from 'react';
import React from 'react';
import NavContainer from './components/NavContainer';
import Navigations from './components/Navigations';

function App() {
  const [token, setToken] = useState(null);
return (
  <>
  <div id='container'>
  <Navigations token={token} setToken={setToken} />
  <NavContainer token={token} setToken={setToken} />
  </div>
  </>
)
};

export default App
