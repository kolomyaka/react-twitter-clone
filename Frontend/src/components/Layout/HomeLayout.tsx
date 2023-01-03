import {Route, Routes} from "react-router";
import {CircularProgress, Paper} from "@mui/material";
import {Tweet} from "../Tweet/Tweet";
import React, {useEffect} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {selectloadingStatus, selectTweetsItems} from "../../store/selectors/tweetSelectors";
import {getTweetsFetch} from "../../store/slices/Tweets/tweetSlice";



const CenterLoader = styled("div")`
  text-align: center;
  margin-top: 20px;
`;

export const HomeLayout:React.FC = () => {

    const dispatch = useDispatch();
    const tweets = useSelector(selectTweetsItems);
    const tweetsLoadingStatus = useSelector(selectloadingStatus);

    useEffect(() => {
        dispatch(getTweetsFetch());
        // dispatch(getTagsFetch());
    }, [dispatch]);
    console.log('here' , tweets, tweetsLoadingStatus)
    return (
        <>
             {tweetsLoadingStatus === "LOADED" ? (
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
                )
             }
        </>
    )
}