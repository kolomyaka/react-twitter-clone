import { Container, Grid, IconButton, InputAdornment, Paper, TextField, Typography, CircularProgress } from '@mui/material'
import React, { useEffect } from 'react'

import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Tweet } from '../components/Tweet/Tweet';
import { Sidebar } from '../components/Sidebar';
import { AddTweetForm } from '../components/AddTweetForm';
import AddPersonIcon from '@mui/icons-material/PersonAddOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { getTweetsFetch } from '../store/slices/Tweets/tweetSlice';
import { selectloadingStatus, selectTweetsItems } from '../store/selectors/tweetSelectors';
import { getTagsFetch } from '../store/slices/Tags/tagsSlice';
import { selectTagsItems, selectTagsLoadingStatus } from '../store/selectors/tagsSelector';

const SearchTextBlock = styled(TextField)`
    * {
        border: none;
    }

    div {
        background-color: #E6ECF0;
        border-radius: 30px;
    }

    input {
        background-color: '#E6ECF0';
        padding: 7px;
    }
    input:focus {
        border: none;
        border-radius: 30;
    }

    div:focus {
        border: none;
        outline: none;
    }

    fieldset {
        border: none
    }
`

const RightSide = styled('div')`
    position: sticky;
    top: 0;
    padding-top: 15px;
`

const RightSideBlock = styled('div')`
    background-color: #F5F8FA;
    margin-top: 20px;
`

const RightSideContent = styled('div')`
    cursor: pointer;
    
    div {
        &:hover {
            background-color: #E6ECF0;
            
        }
    }
`

const CenterLoader = styled('div')`
    text-align: center;
    margin-top: 20px;
`

const MainTheme = styled('span')`
    font-weight: 700;
    display: block;
`

const FlexWrapper = styled.div`
    display: flex;
    align-items: ${(props: FlexWrapperProps) => props.align};
    flex-direction: ${(props: FlexWrapperProps) => props.direction};
`
type FlexWrapperProps = {
    direction?: string
    align?: string
}



export const Home = () => {

    const dispatch = useDispatch();
    const tweets = useSelector(selectTweetsItems);
    const tags = useSelector(selectTagsItems);
    const tweetsLoadingStatus = useSelector(selectloadingStatus);
    const tagsLoadingStatus = useSelector(selectTagsLoadingStatus);

    useEffect(() => {
        dispatch(getTweetsFetch());
        dispatch(getTagsFetch());
    }, [dispatch])
    
    
    return (
        <Container maxWidth='lg'>
            <Grid container spacing={3}>
                <Grid item md={3} sm={2} sx={{ position: 'sticky' }}>
                    <Sidebar />
                </Grid>
                <Grid item md={6.5} sm={8}>
                    <Paper square sx={{ borderBottom: 0, borderTop: 0, height: '100%' }} variant='outlined'>
                        <Paper square variant='outlined' sx={{ borderLeft: 0, borderRight: 0, padding: '10px 15px', position: 'sticky', top: 0, left: 0, zIndex: 1000 }}>
                            <Typography variant='h6' sx={{ fontWeight: 700, borderRadius: 0 }}>Главная</Typography>
                        </Paper>
                        <Paper square variant='outlined' sx={{ borderBottomWidth: '5px' }}>
                            <AddTweetForm />
                        </Paper>
                        
                            {
                                tweetsLoadingStatus === 'LOADED' ? tweets.map((tweet) => (
                                    <Paper key={tweet._id} variant='outlined'>
                                        <Tweet user={{ fullname: tweet.user.fullname, username: tweet.user.username, avatarUrl: tweet.user.avatarUrl}}  text={tweet.text} />
                                    </Paper>
                                )) : <CenterLoader><CircularProgress /></CenterLoader>
                            }

                    </Paper>
                </Grid>
                <Grid item md={2.5} sm={2}>
                    <RightSide>
                        <SearchTextBlock
                            fullWidth
                            placeholder='Поиск по Твиттеру'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }}

                        />
                        <RightSideBlock>
                            <Paper square variant='outlined' sx={{ backgroundColor: '#F5F8FA', border: 'none' }}>
                                <Typography variant='h6' sx={{ padding: '5px 10px', fontWeight: '700', fontSize: '1' }}>Актуальные темы</Typography>
                            </Paper>
                            <RightSideContent>
                                {
                                    tagsLoadingStatus === 'LOADED' ? tags.map((tag) => (
                                        <Paper square variant='outlined' sx={{ backgroundColor: '#F5F8FA', padding: '5px 10px', borderLeft: 'none', borderRight: 'none' }}>
                                            <MainTheme>{tag.name}</MainTheme>
                                            <span style={{ color: 'rgba(0,0,0,0.5)' }}>Твитов: {tag.count}</span>
                                        </Paper>
                                    )) : <CenterLoader><CircularProgress /></CenterLoader>
                                }

                            </RightSideContent>
                        </RightSideBlock>
                        <RightSideBlock>
                            <Paper square variant='outlined' sx={{ backgroundColor: '#F5F8FA', border: 'none' }}>
                                <Typography variant='h6' sx={{ padding: '5px 10px', fontWeight: '700', fontSize: '1' }}>Кого читать</Typography>
                            </Paper>
                            <RightSideContent>
                                <Paper square variant='outlined' sx={{ backgroundColor: '#F5F8FA', padding: '5px 10px', borderLeft: 'none', borderRight: 'none' }}>
                                    <FlexWrapper align='center'>
                                        <img src="https://i.pravatar.cc/35" alt="userAvatar" style={{ borderRadius: '50%', margin: '5px 9px 0 0' }} />
                                        <FlexWrapper direction='column' >
                                            <div style={{ fontSize: "15px", fontWeight: 700 }}>Dock of Shame</div>
                                            <div style={{ fontSize: "12px", color: '#9e9e9e' }}>@FavDockOfShame</div>
                                        </FlexWrapper>
                                        <IconButton sx={{ marginLeft: '10px' }}>
                                            <AddPersonIcon color='primary' />
                                        </IconButton>
                                    </FlexWrapper>
                                </Paper>
                            </RightSideContent>
                        </RightSideBlock>
                    </RightSide>

                </Grid>
            </Grid>
        </Container >
    )
}
