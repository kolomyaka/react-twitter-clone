import { Container, Grid, IconButton, InputAdornment, Paper, TextField, Typography } from '@mui/material'
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



const SearchTextField = styled(TextField)(({ theme }) => ({

    '&.Mui-focused': {
        backgroundColor: '#FFF'
    },


    div: {
        backgroundColor: '#E6ECF0',
        borderRadius: 30,
        border: 'none',
        marginTop: '5px',
    },

    input: {
        height: 25,
        padding: '7px 7px 5px 5px',
        border: 'none',
    },

}))

const RightSide = styled('div')`
    position: sticky;
    top: 0;
`

const RightSideBlock = styled('div')`
    background-color: #E6ECF0;
    margin-top: 20px;
`

const MainTheme = styled('span')`
    font-weight: 600;
`

const ThemeCounter = styled('div')`

`


export const Home = () => {
    return (
        <Container maxWidth='lg'>
            <Grid container spacing={2}>
                <Grid item md={3} sm={2} sx={{ position: 'sticky' }}>
                    <Sidebar />
                </Grid>
                <Grid item md={6.5} sm={8}>
                    <Paper sx={{ borderBottom: 0, borderTop: 0, height: '100%' }} variant='outlined'>
                        <Paper variant='outlined' sx={{ borderLeft: 0, borderRight: 0, padding: '10px 15px', position: 'sticky', top: 0, left: 0, zIndex: 1000 }}>
                            <Typography variant='h6' sx={{ fontWeight: 700, borderRadius: 0 }}>Главная</Typography>
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
                <Grid item md={2.5} sm={2} sx={{ marginTop: '10px' }}>
                    <RightSide>
                        <SearchTextField
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
                            <Paper variant='outlined' sx={{ backgroundColor: '#E6ECF0' }}>
                                <Typography variant='h6' sx={{ padding: '5px 10px' }}>Актуальные темы</Typography>
                            </Paper>
                            <Paper sx={{ backgroundColor: '#E6ECF0', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>
                                <MainTheme>Санкт-Петербург</MainTheme>

                            </Paper>
                        </RightSideBlock>
                    </RightSide>

                </Grid>
            </Grid>
        </Container >
    )
}
