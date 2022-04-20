import { Button, CircularProgress, Container, Grid, IconButton, InputAdornment, Paper, TextareaAutosize, TextField, Typography } from '@mui/material'
import React from 'react'

import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import NotificationIcon from '@mui/icons-material/NotificationsNone';
import MessageIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListIcon from '@mui/icons-material/ListAlt';
import UserIcon from '@mui/icons-material/PersonOutline';
import { Tweet } from '../components/Tweet/Tweet';
import { Sidebar } from '../components/Sidebar';
import ImageIcon from '@mui/icons-material/ImageOutlined';
import SmileIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import { AddTweetForm } from '../components/AddTweetForm';

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
    background-color: #E6ECF0;
    margin-top: 20px;
    div {
        cursor: pointer;
    }
`

const MainTheme = styled('span')`
    font-weight: 700;
    display: block;
`


const AddTweetWrapper = styled('div')`
    display: flex;
    align-items: flex-start;

`

const AddTweetAvatar = styled('div')`

`

const AddTweetTextField = styled('div')`
    width: 100%;
    padding-right: 15px;
    margin-top: 5px;
    
    textarea {
        border: none;
        resize: none;
        width: 100%;
        font-size: 20px;
        &:focus {
            outline:none;
        }
    }
`

const AddTweetFooter = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`

const FlexWrapper = styled('div')`
    display: flex;
    align-items: center;
`





export const Home = () => {
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
                        <Paper variant='outlined'>
                            <Tweet user={{
                                name: 'Nikita',
                                userName: '@Kolomyaka',
                                avatarUrl: 'https://i.pravatar.cc/45'
                            }} />
                            <Tweet user={{
                                name: 'Nikita',
                                userName: '@Kolomyaka',
                                avatarUrl: 'https://i.pravatar.cc/45'
                            }} />
                            <Tweet user={{
                                name: 'Nikita',
                                userName: '@Kolomyaka',
                                avatarUrl: 'https://i.pravatar.cc/45'
                            }} />
                            <Tweet user={{
                                name: 'Nikita',
                                userName: '@Kolomyaka',
                                avatarUrl: 'https://i.pravatar.cc/45'
                            }} />
                            <Tweet user={{
                                name: 'Nikita',
                                userName: '@Kolomyaka',
                                avatarUrl: 'https://i.pravatar.cc/45'
                            }} />
                            <Tweet user={{
                                name: 'Nikita',
                                userName: '@Kolomyaka',
                                avatarUrl: 'https://i.pravatar.cc/45'
                            }} />
                            <Tweet user={{
                                name: 'Nikita',
                                userName: '@Kolomyaka',
                                avatarUrl: 'https://i.pravatar.cc/45'
                            }} />
                            <Tweet user={{
                                name: 'Nikita',
                                userName: '@Kolomyaka',
                                avatarUrl: 'https://i.pravatar.cc/45'
                            }} />
                            <Tweet user={{
                                name: 'Nikita',
                                userName: '@Kolomyaka',
                                avatarUrl: 'https://i.pravatar.cc/45'
                            }} />
                        </Paper>
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
                            <Paper square variant='outlined' sx={{ backgroundColor: '#E6ECF0', border: 'none' }}>
                                <Typography variant='h6' sx={{ padding: '5px 10px', fontWeight: '700' }}>Актуальные темы</Typography>
                            </Paper>
                            <Paper square variant='outlined' sx={{ backgroundColor: '#E6ECF0', padding: '5px 10px', borderLeft: 'none', borderRight: 'none' }}>
                                <MainTheme>Санкт-Петербург</MainTheme>
                                <span style={{ color: 'rgba(0,0,0,0.5)' }}>Твитов: 3 331</span>
                            </Paper>
                            <Paper square variant='outlined' sx={{ backgroundColor: '#E6ECF0', padding: '5px 10px', border: 'none' }}>
                                <MainTheme>#Коронавирус</MainTheme>
                                <span style={{ color: 'rgba(0,0,0,0.5)' }}>Твитов: 163 122</span>
                            </Paper>
                            <Paper square variant='outlined' sx={{ backgroundColor: '#E6ECF0', padding: '5px 10px', borderLeft: 'none', borderRight: 'none' }}>
                                <MainTheme>Беларусь</MainTheme>
                                <span style={{ color: 'rgba(0,0,0,0.5)' }}>Твитов: 13 553</span>
                            </Paper>
                        </RightSideBlock>
                    </RightSide>

                </Grid>
            </Grid>
        </Container >
    )
}
