import { Container, Grid, IconButton, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import TwitterIcon from "@mui/icons-material/Twitter";
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import NotificationIcon from '@mui/icons-material/NotificationsNone';
import MessageIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListIcon from '@mui/icons-material/ListAlt';
import UserIcon from '@mui/icons-material/PersonOutline';

const IconsList = styled("ul")`
    list-style: none;
    margin: 0;
    padding: 0;
`

const IconsListItem = styled('li')`
    display: flex;
    align-items: center;
    & h6 {
        font-weight: 500;
        font-size: 20px;
        margin-left: 15px;
    }
    & svg {
        font-size: 25px;
    }
`
const SearchTextField = styled(TextField)(({theme}) => ({

    div : {
        backgroundColor: '#E6ECF0',
        borderRadius: 30,
        border: 'none',
    },

    input : {
        height: 25,
        padding: 0,
    }
}))

export const Home = () => {
  return (
    <Container maxWidth='lg'>
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <IconsList>
                    <IconsListItem>
                        <IconButton aria-label='delete' color="primary">
                            <TwitterIcon color="primary"/>
                        </IconButton>
                    </IconsListItem>
                    <IconsListItem>
                        <IconButton aria-label='delete'>
                            <SearchIcon />
                        </IconButton>
                        <Typography variant='h6'>Поиск</Typography>

                    </IconsListItem>
                    <IconsListItem>
                        <IconButton aria-label='delete'>
                            <NotificationIcon />
                        </IconButton>
                        <Typography variant='h6'>Уведомления</Typography>
                    </IconsListItem>
                    <IconsListItem>
                        <IconButton aria-label='delete'>
                            <MessageIcon />
                        </IconButton>
                        <Typography variant='h6'>Сообщения</Typography>
                    </IconsListItem>
                    <IconsListItem>
                        <IconButton aria-label='delete'>
                            <BookmarkBorderIcon />
                        </IconButton>
                        <Typography variant='h6'>Закладки</Typography>

                    </IconsListItem>
                    <IconsListItem>
                        <IconButton aria-label='delete'>
                            <ListIcon />
                        </IconButton>
                        <Typography variant='h6'>Список</Typography>

                    </IconsListItem>
                    <IconsListItem>
                        <IconButton aria-label='delete'>
                            <UserIcon />
                        </IconButton>
                        <Typography variant='h6'>Профиль</Typography>

                    </IconsListItem>
                </IconsList>
            </Grid>
            <Grid item xs={6}>
                <Paper>xs</Paper>
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
    </Container>
  )
}
