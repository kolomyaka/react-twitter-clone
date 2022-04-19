import { Grid, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import CommentIcon from '@mui/icons-material/ModeCommentOutlined';
import RepeatIcon from '@mui/icons-material/RepeatOutlined';
import LikeIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/ReplyOutlined';
import styled from 'styled-components';


const СontentTweetWrapper = styled.div`
    margin: 7px 15px;
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
    cursor: pointer;
    &:hover {
        background-color: rgb(245, 248, 250);
    }
`

type Props = {
    user: User

}

type User = {
    name: string
    avatarUrl: string
    userName: string
}



export const Tweet = ({ user }: Props) => {
    return (
        <>
            <Paper sx={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none' }} variant='outlined'>
                <TweetWrapper>
                    <Grid container spacing={1} sx={{ marginTop: '0' }}>
                        <Grid item xs={1} >
                            <img src={user.avatarUrl} style={{ borderRadius: '50%', margin: '7px 10px' }} alt='Аватар пользователя' />
                        </Grid>
                        <Grid item xs={11} >
                            <СontentTweetWrapper>
                                <Typography><b>{user.name}</b><span style={{ color: '#9e9e9e', marginLeft: '5px' }}>{user.userName} · 1ч</span></Typography>
                                <Typography variant='body1'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus voluptatibus obcaecati eos nesciunt magni nemo dolores architecto eaque id voluptatum, minus quidem nulla.
                                </Typography>
                                <FlexWrapper>
                                    <IconButton>
                                        <CommentIcon style={{ fontSize: '16px' }} />
                                        <TweetsCounter>1</TweetsCounter>
                                    </IconButton>
                                    <IconButton>
                                        <RepeatIcon style={{ fontSize: '16px' }} />
                                    </IconButton>
                                    <IconButton>
                                        <LikeIcon style={{ fontSize: '16px' }} />
                                    </IconButton>
                                    <IconButton>
                                        <ShareIcon style={{ fontSize: '16px' }} />
                                    </IconButton>
                                </FlexWrapper>
                            </СontentTweetWrapper>

                        </Grid>
                    </Grid>
                </TweetWrapper>
            </Paper>
        </>
    )
}
