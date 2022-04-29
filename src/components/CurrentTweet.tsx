import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { Tweet } from './Tweet/Tweet'
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTweet } from '../store/slices/currentTweet/currentTweetSlice';
import { selectLoadingStatus, selectTweetItem } from '../store/selectors/currentTweetSelector';
import { CircularProgress, Paper, Typography } from '@mui/material';
import styled from 'styled-components';


const CenterLoader = styled("div")`
  text-align: center;
  margin: 30px 0;
`;

const СontentTweetWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 7px 0px 20px 0;
    width: 100%;

`

const FlexWrapper = styled('div')`
    display: flex;
    align-items: flex-start;  
    flex-direction: column;
`

const TweetsCounter = styled('span')`
    font-size: 20px;
    padding-left: 5px;
`

const TweetWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    padding: 10px 25px 15px 20px;
    &:hover {
        background-color: rgb(245, 248, 250);
    }
`

const UserAvatarWrapper = styled('div')`
    margin-right: 15px;
`


type Props = {}

export const CurrentTweet = (props: Props) => {
    const params = useParams();
    const id = params.id;
    const dispatch = useDispatch();

    const currentTweetData = useSelector(selectTweetItem);
    const isLoading = useSelector(selectLoadingStatus);


    useEffect(() => {
        if (id) {
            dispatch(setCurrentTweet(id));
        }
    }, [id])


    if (isLoading === 'LOADING') {
        return (
            <CenterLoader>
                <CircularProgress />
            </CenterLoader>
        )
    }

    if (currentTweetData) {
        return (
            <Paper square sx={{ border: 'none' }} variant='outlined'>
                <TweetWrapper>
                    <СontentTweetWrapper>
                        <UserAvatarWrapper>
                            <img src={currentTweetData.user.avatarUrl} style={{ borderRadius: '50%' }} alt='Аватар пользователя' />
                        </UserAvatarWrapper>
                        <FlexWrapper>
                            <Typography><b>{currentTweetData.user.fullname}</b></Typography>
                            <Typography sx={{ color: '#9e9e9e' }}>@{currentTweetData.user.username}</Typography>
                        </FlexWrapper>
                    </СontentTweetWrapper>
                    <Typography variant='body1'>
                        {currentTweetData.text}
                    </Typography>
                </TweetWrapper>
            </Paper >
        )
    }

    return null;

}