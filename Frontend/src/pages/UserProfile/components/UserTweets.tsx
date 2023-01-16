import {CircularProgress, Paper} from "@mui/material";
import {Tweet} from "../../../components/Tweet/Tweet";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectloadingStatus, selectTweetsItems} from "../../../store/selectors/tweetSelectors";
import {User} from "../../../store/slices/User/UserSliceTypes";
import {useParams} from "react-router";
import {getTweetsFetch} from "../../../store/slices/Tweets/tweetSlice";
import {CenterLoader} from "../../../components/Layout/HomeLayout";
import {Tweet as TweetType} from '../../../store/slices/Tweets/tweetSliceTypes'
import {LoadingState} from "../../../types";

interface UserTweetsProps {
    user: User | undefined
    tweets: TweetType[]
    tweetsLoadingStatus: LoadingState
}

export const UserTweets:React.FC<UserTweetsProps> = ({user, tweets, tweetsLoadingStatus}) => {

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