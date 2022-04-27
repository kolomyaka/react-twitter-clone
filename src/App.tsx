import React from "react";
import SignIn from "./pages/SignIn";
import { Routes, Route } from "react-router-dom";
import { Home, HeaderTitle } from "./pages/Home";
import { AddTweetForm } from "./components/AddTweetForm";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
            <Route path="search/" element={<AddTweetForm />} />
            <Route path="tweet/*" element={<HeaderTitle />}>
            </Route>
        </Route>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
