import React from "react";
import SignIn from "./pages/SignIn/SignIn";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AddTweetForm } from "./components/AddTweetForm";
import { CurrentTweet } from './components/CurrentTweet';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Home />} >
          {/* <Route path='/*' element={<AddTweetForm />} />
          <Route path="tweet/:id" element={<CurrentTweet />} />
          <Route path='search/*' element={<AddTweetForm />} /> */}
        </Route>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
