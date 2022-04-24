import { Grid, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import CommentIcon from '@mui/icons-material/ModeCommentOutlined';
import RepeatIcon from '@mui/icons-material/RepeatOutlined';
import LikeIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/ReplyOutlined';
import styled from 'styled-components';


const СontentTweetWrapper = styled.div`
    margin: 7px 0px;
    width: 100%;
    &:hover {
    }
`

const FlexWrapper = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 450px;
    position: relative;
    top: 0;
    left: -8px;
    
`

const TweetsCounter = styled('span')`
    font-size: 20px;
    padding-left: 5px;
`

const TweetWrapper = styled('div')`
    display: flex;
    cursor: pointer;
    padding-right: 15px;
    &:hover {
        background-color: rgb(245, 248, 250);
    }
`

type Props = {
    text: string
    user: User
}

type User = {
    fullname: string
    avatarUrl: string
    username: string
}

const UserAvatarWrapper = styled('div')`

`

export const Tweet = ({ user, text }: Props) => {
    return (
        <>
            <Paper square sx={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none' }} variant='outlined'>
                <TweetWrapper>
                    <UserAvatarWrapper>
                        <img src={user.avatarUrl} style={{ borderRadius: '50%', margin: '7px 10px' }} alt='Аватар пользователя' />
                    </UserAvatarWrapper>
                    <СontentTweetWrapper>
                        <Typography><b>{user.fullname}</b><span style={{ color: '#9e9e9e', marginLeft: '5px' }}>{user.username} · 1ч</span></Typography>
                        <Typography variant='body1'>
                            {text}
                        </Typography>
                        <FlexWrapper>
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
                        </FlexWrapper>
                    </СontentTweetWrapper>
                </TweetWrapper>
            </Paper >
        </>
    )
}
