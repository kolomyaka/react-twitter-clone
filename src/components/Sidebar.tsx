import { IconButton, Typography } from '@mui/material'
import React from 'react'
import NotificationIcon from '@mui/icons-material/NotificationsNone';
import MessageIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListIcon from '@mui/icons-material/ListAlt';
import UserIcon from '@mui/icons-material/PersonOutline';
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

const IconsList = styled("ul")`
    list-style: none;
    margin: 0;
    padding-top: 10px;
`

const IconsListItem = styled('li')`
    display: flex;
    align-items: center;
    cursor: pointer;
    & h6 {
        font-weight: 500;
        font-size: 20px;
        margin-left: 15px;
    }
    & svg {
        font-size: 25px;
    }
    &:hover {
        background-color: rgb(245, 248, 250);
        border-radius: 20px;
        color: rgb(29,161,242);
        
    }
`

type Props = {}

export const Sidebar = (props: Props) => {
    return (
        <>
            <IconsList>
                <IconButton aria-label='delete' color="primary">
                    <TwitterIcon fontSize={'large'} color="primary" />
                </IconButton>
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
        </>
    )
}