import React, {useEffect} from "react";
import SignIn from "./pages/SignIn/SignIn";
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth, selectUserStatus, userIsReady} from "./store/selectors/userSelector";
import {useLocation, useNavigate} from "react-router";
import {fetchUserData} from "./store/slices/User/UserSlice";
import {Layout} from "./components/Layout/Layout";
import {AddTweetForm} from "./components/AddTweetForm";
import {HomeLayout} from "./components/Layout/HomeLayout";
import {CurrentTweet} from "./components/CurrentTweet";
import styled from "styled-components";
import {LoadingState} from "./types";
import TwitterIcon from "@mui/icons-material/Twitter";
import {Typography} from "@mui/material";
import {FlexWrapper} from "./components/StyledComponents/FlexWrapper";
import {HeadUserProfile} from "./pages/UserProfile/HeadUserProfile";

const Centered = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

function App() {
  const isAuth = useSelector(selectIsAuth)
  const isReady = useSelector(userIsReady)
  const userLoadingStatus = useSelector(selectUserStatus)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  const checkAuth = () => {
      let token = localStorage.getItem('token')
      if (token) {
          dispatch(fetchUserData())
          if (location.pathname === '/') {
              navigate('/home')
          }
      } else {
          navigate('/signin')
      }
  }

  useEffect(() => {
    checkAuth()
  }, [isAuth])

  if (!isReady && userLoadingStatus !== LoadingState.NEVER && userLoadingStatus !== LoadingState.ERROR) {
      return (
          <Centered>
              <FlexWrapper>
                  <TwitterIcon color="primary" style={{width: 80, height: 80}} />
                  {
                      userLoadingStatus === LoadingState.LOADED && <FlexWrapper>
                          <Typography
                              variant="h4"
                              align={'center'}
                              fontWeight={700}
                              fontSize={32}
                              mb={"35px"}
                              mt={"15px"}
                          >
                              Письмо с кодом активации было отправлено вам на почту
                          </Typography>
                      </FlexWrapper>
                  }
              </FlexWrapper>
          </Centered>
      )
  }

  return (
    <div className="App">
      <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path={'/home'} element={<Layout headElement={<AddTweetForm />} contentElement={<HomeLayout />} />} />
          <Route path={'/tweet/:id'} element={<Layout headElement={<CurrentTweet />} />} />
          <Route path={'/search'} element={<Layout headElement={<AddTweetForm />} />} />
          <Route path={'/user/:id'} element={<Layout contentElement={<HeadUserProfile />} />} />
          <Route path={'*'} element={<>Not found</>} />
      </Routes>
    </div>
  );
}

export default App;
