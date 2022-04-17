import React from 'react';
import SignIn from './pages/SignIn';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
