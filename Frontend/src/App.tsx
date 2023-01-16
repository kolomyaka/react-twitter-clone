import React, {useEffect} from "react";
import SignIn from "./pages/SignIn/SignIn";
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth, selectUserStatus, userIsReady} from "./store/selectors/userSelector";
import {fetchUserData} from "./store/slices/User/UserSlice";
import {Layout} from "./components/Layout/Layout";
import {AddTweetForm} from "./components/AddTweetForm";
import {HomeLayout} from "./components/Layout/HomeLayout";
import {CurrentTweet} from "./components/CurrentTweet";
import {LoadingState} from "./types";
import {HeadUserProfile} from "./pages/UserProfile/HeadUserProfile";
import {LoadingScreen} from "./components/LoadingScreen";
import {useNavigate} from "react-router";


function App() {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // if (!isReady && userLoadingStatus !== LoadingState.NEVER && userLoadingStatus !== LoadingState.ERROR) {
  //     return (
  //         <LoadingScreen userLoadingStatus={userLoadingStatus} />
  //     )
  // }

  return (
    <div className="App">
      <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path={'/home'} element={<Layout headElement={<AddTweetForm />} contentElement={<HomeLayout />} />} />
          <Route path={'/tweet/:id'} element={<Layout headElement={<CurrentTweet />} />} />
          <Route path={'/search'} element={<Layout headElement={<AddTweetForm />} />} />
          <Route path={'/user/:id'} element={<Layout contentElement={<HeadUserProfile />} />} />
          <Route path={'/user/activate/:hash'} element={<LoadingScreen activateScreen={true} />} />
          <Route path={'*'} element={<>Not found</>} />
      </Routes>
    </div>
  );
}

export default App;
