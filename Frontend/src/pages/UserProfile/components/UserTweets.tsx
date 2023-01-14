import {Paper} from "@mui/material";
import {Tweet} from "../../../components/Tweet/Tweet";
import React from "react";
import {useSelector} from "react-redux";
import {selectTweetsItems} from "../../../store/selectors/tweetSelectors";
import {User} from "../../../store/slices/User/UserSliceTypes";


interface UserTweetsProps {
    user: User | undefined
}

export const UserTweets:React.FC<UserTweetsProps> = ({user}) => {

    const tweets = useSelector(selectTweetsItems);

    return (
        <>
            {
                tweets.map((tweet) => (
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
                ))
            }
        </>
    )
}