import React, {useEffect} from "react";
import SignIn from "./pages/SignIn/SignIn";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth} from "./store/selectors/userSelector";
import {useNavigate} from "react-router";
import {authApi} from "./services/authApi";
import {setUserData} from "./store/slices/User/UserSlice";

function App() {
  const isAuth = useSelector(selectIsAuth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const checkAuth = async () => {
      const {data} = await authApi.getMe()
      dispatch(setUserData(data))
  }

  useEffect(() => {
    checkAuth()
  }, [])


  useEffect(() => {
      console.log('isAuth = ', isAuth)
      if (isAuth) {
          navigate('/home')
      } else {
          navigate('/signin')
      }
  }, [isAuth])

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
