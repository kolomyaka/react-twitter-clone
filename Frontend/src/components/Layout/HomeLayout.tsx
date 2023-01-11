import {CircularProgress, Paper} from "@mui/material";
import {Tweet} from "../Tweet/Tweet";
import React, {useEffect} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {selectloadingStatus, selectTweetsItems} from "../../store/selectors/tweetSelectors";
import {getTweetsFetch} from "../../store/slices/Tweets/tweetSlice";
import {selectUserData} from "../../store/selectors/userSelector";


const CenterLoader = styled("div")`
  text-align: center;
  margin-top: 20px;
`;

export const HomeLayout:React.FC = () => {

    const dispatch = useDispatch();
    const tweets = useSelector(selectTweetsItems);
    const tweetsLoadingStatus = useSelector(selectloadingStatus);
    const user = useSelector(selectUserData)

    useEffect(() => {
        dispatch(getTweetsFetch());
        // dispatch(getTagsFetch());
    }, [dispatch]);

    return (
        <>
             {tweetsLoadingStatus === "LOADED" ? (
                    tweets.map((tweet) => (
                        <Paper key={tweet._id}>
                            <Tweet
                                userId={user?._id}
                                id={tweet._id}
                                date={tweet.createdAt}
                                images={tweet.images}
                                user={{
                                    fullname: tweet.user.fullname,
                                    username: tweet.user.username,
                                    avatarUrl: tweet.user.avatarUrl,
                                    _id: tweet.user._id
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