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

    div: {
        backgroundColor: '#E6ECF0',
        borderRadius: 30,
        border: 'none',
        marginTop: '5px',
    },

    input: {
        height: 25,
        padding: 0,
        border: 'none',
    },

}))


export const Home = () => {
    return (
        <Container maxWidth='lg'>
            <Grid container spacing={2}>
                <Grid item xs={3} >
                    <Sidebar />
                </Grid>
                <Grid item xs={6}>
                    <Paper sx={{ borderBottom: 0, borderTop: 0, height: '100vh' }} variant='outlined'>
                        <Paper variant='outlined' sx={{ borderLeft: 0, borderRight: 0, padding: '10px 15px' }}>
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

                        </Paper>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <SearchTextField
                        fullWidth
                        placeholder='Поиск в Твиттере'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }}
                    />
                </Grid>
            </Grid>
        </Container >
    )
}
