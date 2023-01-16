import React, {useEffect} from "react";
import SignIn from "./pages/SignIn/SignIn";
import {Route, Routes, Navigate} from "react-router-dom";
import {Layout} from "./components/Layout/Layout";
import {AddTweetForm} from "./components/AddTweetForm";
import {HomeLayout} from "./components/Layout/HomeLayout";
import {CurrentTweet} from "./components/CurrentTweet";
import {HeadUserProfile} from "./pages/UserProfile/HeadUserProfile";
import {LoadingScreen} from "./components/LoadingScreen";
import {useNavigate} from "react-router";


function App() {

  return (
    <div className="App">
      <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path={'/home'} element={<Layout headElement={<AddTweetForm />} contentElement={<HomeLayout />} />} />
          <Route path={'/tweet/:id'} element={<Layout headElement={<CurrentTweet />} />} />
          <Route path={'/search'} element={<Layout headElement={<AddTweetForm />} />} />
          <Route path={'/user/:id'} element={<Layout contentElement={<HeadUserProfile />} />} />
          <Route path={'/user/activate/:hash'} element={<LoadingScreen activateScreen={true} />} />
          <Route path={'/'} element={<Navigate to={'/signin'} />} />
          <Route path={'*'} element={<>Not found</>} />
      </Routes>
    </div>
  );
}

export default App;
