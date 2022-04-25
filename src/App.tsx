import React from 'react';
import SignIn from './pages/SignIn';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { AddTweetForm } from './components/AddTweetForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/home/*' element={<Home />} />
        <Route path='/home/search?' element={<AddTweetForm />} />
      </Routes>
    </div>
  );
}

export default App;
