import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTweet } from '../store/slices/currentTweet/currentTweetSlice';
import { selectLoadingStatus, selectTweetItem } from '../store/selectors/currentTweetSelector';
import { CircularProgress, IconButton, Paper, Typography } from '@mui/material';
import styled from 'styled-components';
import CommentIcon from '@mui/icons-material/ModeCommentOutlined';
import RepeatIcon from '@mui/icons-material/RepeatOutlined';
import LikeIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/ReplyOutlined';

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

const IconsButtonsWrapper = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 450px;
    margin: 3px auto;
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
    }, [dispatch, id])


    if (isLoading === 'LOADING') {
        return (
            <CenterLoader>
                <CircularProgress />
            </CenterLoader>
        )
    }

    if (currentTweetData) {
        return (
            <Paper square sx={{ borderBottom: 'none', borderLeft: 'none', borderRight: 'none' }} variant='outlined'>
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
                    <Typography variant='body1' style={{ wordBreak: 'break-word' }}>
                        {currentTweetData.text}
                    </Typography>
                </TweetWrapper>
                <Paper variant='outlined' square sx={{ borderLeft: 'none', borderRight: 'none' }}>
                    <IconsButtonsWrapper>
                        <IconButton>
                            <CommentIcon style={{ fontSize: '19px' }} />
                            <TweetsCounter>1</TweetsCounter>
                        </IconButton>
                        <IconButton>
                            <RepeatIcon style={{ fontSize: '19px' }} />
                        </IconButton>
                        <IconButton>
                            <LikeIcon style={{ fontSize: '19px' }} />
                        </IconButton>
                        <IconButton>
                            <ShareIcon style={{ fontSize: '19px' }} />
                        </IconButton>
                    </IconsButtonsWrapper>
                </Paper>
            </Paper >
        )
    }

    return null;

}