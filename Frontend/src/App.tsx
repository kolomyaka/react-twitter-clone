import React, {useEffect} from "react";
import SignIn from "./pages/SignIn/SignIn";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth} from "./store/selectors/userSelector";
import {useNavigate} from "react-router";
import {authApi} from "./services/authApi";
import {setUserData} from "./store/slices/User/UserSlice";
import {Layout} from "./components/Layout/Layout";
import {AddTweetForm} from "./components/AddTweetForm";
import {HomeLayout} from "./components/Layout/HomeLayout";
import {CurrentTweet} from "./components/CurrentTweet";

function App() {
  const isAuth = useSelector(selectIsAuth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const checkAuth = async () => {
      let token = localStorage.getItem('token')
      if (token) {
          const {data} = await authApi.getMe()
          dispatch(setUserData(data))
      } else {
          navigate('/signin')
      }
  }

  useEffect(() => {
    checkAuth()
  }, [isAuth])

  return (
    <div className="App">
      <Routes>
          <Route path="/signin" element={<SignIn />} />

          <Route path={'/home'} element={<Layout headElement={<AddTweetForm />} contentElement={<HomeLayout />} />} />
          <Route path={'/tweet/:id'} element={<Layout headElement={<CurrentTweet />} />} />
          <Route path={'/search'} element={<Layout headElement={<AddTweetForm />} />} />

          <Route path={'*'} element={<>Not found</>} />
      </Routes>
    </div>
  );
}

export default App;
