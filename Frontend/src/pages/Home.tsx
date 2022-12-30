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
  }
  input:focus {
    border: none;
    border-radius: 30px;
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

const RightSideBlock = styled("div")`
  background-color: #f5f8fa;
  margin-top: 20px;
  border-radius: 20px;
`;

const RightSideContent = styled("div")`
  cursor: pointer;
  border-radius: 20px;
  div {
    &:hover {
      transition: all 300ms ease-in-out;
      background-color: #e6ecf0;
    }
  }
`;

const CenterLoader = styled("div")`
  text-align: center;
  margin-top: 20px;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: ${(props: FlexWrapperProps) => props.align};
  flex-direction: ${(props: FlexWrapperProps) => props.direction};
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
            <Tags />
            <RightSideBlock>
              <Paper
                square
                variant="outlined"
                sx={{
                  backgroundColor: "#F5F8FA",
                  border: "none",
                  borderRadius: "20px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ padding: "13px", fontWeight: "700", fontSize: "1" }}
                >
                  Кого читать
                </Typography>
              </Paper>
              <RightSideContent>
                <Paper
                  square
                  variant="outlined"
                  sx={{
                    backgroundColor: "#F5F8FA",
                    padding: "13px",
                    border: "none",
                  }}
                >
                  <FlexWrapper align="center">
                    <img
                      src="https://i.pravatar.cc/35"
                      alt="userAvatar"
                      style={{ borderRadius: "50%", margin: "5px 13px 0 0" }}
                    />
                    <FlexWrapper direction="column">
                      <div style={{ fontSize: "15px", fontWeight: 700 }}>
                        Dock of Shame
                      </div>
                      <div style={{ fontSize: "12px", color: "#9e9e9e" }}>
                        @FavDockOfShame
                      </div>
                    </FlexWrapper>
                    <IconButton sx={{ marginLeft: "40px" }}>
                      <AddPersonIcon color="primary" />
                    </IconButton>
                  </FlexWrapper>
                </Paper>
                <Paper
                  square
                  variant="outlined"
                  sx={{
                    backgroundColor: "#F5F8FA",
                    border: "none",
                    borderEndEndRadius: "20px",
                    borderBottomLeftRadius: "20px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      padding: "13px",
                      fontWeight: "400",
                      color: "#1976d2",
                      fontSize: "15px",
                    }}
                  >
                    Показать еще
                  </Typography>
                </Paper>
              </RightSideContent>
            </RightSideBlock>
          </RightSide>
        </Grid>
      </Grid>
    </Container>
  );
};
