import {
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import React, { useEffect } from "react";

import styled from "styled-components";
import { Tweet } from "../components/Tweet/Tweet";
import { Sidebar } from "../components/Sidebar";
import { AddTweetForm } from "../components/AddTweetForm";
import AddPersonIcon from "@mui/icons-material/PersonAddOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { getTweetsFetch } from "../store/slices/Tweets/tweetSlice";
import {
  selectloadingStatus,
  selectTweetsItems,
} from "../store/selectors/tweetSelectors";

import { Tags } from "../components/Tags";
import { getTagsFetch } from "../store/slices/Tags/tagsSlice";
import { HeaderTitle } from "../components/HeaderTitle";
import { Route, Routes } from 'react-router'
import { CurrentTweet } from '../components/CurrentTweet';
import {Users} from "../components/Users";

const SearchTextBlock = styled(TextField)`
  * {
    border: none;
  }

  div {
    background-color: #e6ecf0;
    border-radius: 30px;
  }

  input {
    background-color: #E6ECF0;
    padding: 7px;
    border-radius: 30px;
  }
  input:focus {
    border: none;
  }

  div:focus {
    border: none;
    outline: none;
  }

  fieldset {
    border: none;
  }
`;

const RightSide = styled("div")`
  position: sticky;
  top: 0;
  padding-top: 15px;
`;


const CenterLoader = styled("div")`
  text-align: center;
  margin-top: 20px;
`;


export type FlexWrapperProps = {
  direction?: string;
  align?: string;
};



export const Home = () => {
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const tweetsLoadingStatus = useSelector(selectloadingStatus);
  
  useEffect(() => {
    dispatch(getTweetsFetch());
    dispatch(getTagsFetch());
  }, [dispatch]);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item md={3} sm={2} xl={3}>
          <Sidebar />
        </Grid>
        <Grid item md={6.5} sm={8} xl={6}>
          <Paper
            square
            sx={{ borderBottom: 0, borderTop: 0, height: "100vh" }}
            variant="outlined"
          >
            <HeaderTitle />
            <Paper square variant="outlined" sx={{ border: 'none' }}>
              <Routes>
                <Route path='/' element={<AddTweetForm />} />
                <Route path='/search' element={<AddTweetForm />} />
                <Route path='/tweet/:id' element={<CurrentTweet />} />
              </Routes>
            </Paper>
            <Routes>
              <Route path='/' element={tweetsLoadingStatus === "LOADED" ? (
                tweets.map((tweet) => (
                  <Paper key={tweet._id}>
                    <Tweet
                      id={tweet._id}
                      date={tweet.createdAt}
                      user={{
                        fullname: tweet.user.fullname,
                        username: tweet.user.username,
                        avatarUrl: tweet.user.avatarUrl,
                      }}
                      text={tweet.text}
                    />
                  </Paper>
                ))
              ) : (
                <CenterLoader>
                  <CircularProgress />
                </CenterLoader>
              )} />
            </Routes>

          </Paper>
        </Grid>
        <Grid item md={2.5} sm={2} xl={3}>
          <RightSide>
            <SearchTextBlock
              fullWidth
              placeholder="Поиск по Твиттеру"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            {/*<Tags />*/}
            <Users />
          </RightSide>
        </Grid>
      </Grid>
    </Container>
  );
};
