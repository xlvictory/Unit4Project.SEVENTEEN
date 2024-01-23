import { useState } from 'react';
import React from 'react';
import NavContainer from './components/NavContainer';
import HomePage from './components/HomePage';
import Navigations from './components/Navigations';

function App() {
  const [count, setCount] = useState(0)
return (
  <>
  <div id='container'>
  <Navigations />
  <NavContainer />
  </div>
  </>
)
};

export default App
