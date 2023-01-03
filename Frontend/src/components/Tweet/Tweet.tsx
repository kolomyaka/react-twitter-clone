import {IconButton, Menu, MenuItem, Paper, Typography} from '@mui/material'
import React from 'react'
import CommentIcon from '@mui/icons-material/ModeCommentOutlined';
import RepeatIcon from '@mui/icons-material/RepeatOutlined';
import LikeIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/ReplyOutlined';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {formatDate} from "../../utils/formatDate";
import avaPlaceholder from '../../assets/ava-placeholder.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {TweetFooterIcons} from "./TweetFooterIcons";
import {UserPhoto} from "../UserPhoto";

const СontentTweetWrapper = styled.div`
    margin: 7px 0px;
    width: 100%;
`

const TweetWrapper = styled('div')`
    display: flex;
    cursor: pointer;
    padding: 10px;
    &:hover {
        background-color: rgb(245, 248, 250);
    }
`

type Props = {
    text: string
    user: User
    id: string
    date: Date
}

type User = {
    fullname: string
    avatarUrl: string
    username: string
}

const UserAvatarWrapper = styled('div')`

`

export const Tweet = ({ user, text, id, date }: Props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Paper square sx={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none' }} variant='outlined'>
                    <TweetWrapper>
                        <Link to={`tweet/${id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                            <UserPhoto size={48} src={user.avatarUrl} />
                        </Link>
                        <СontentTweetWrapper>
                            <Link to={`/tweet/${id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                                <Typography><b>{user.fullname}</b><span style={{ color: '#9e9e9e', marginLeft: '5px' }}>@{user.username} · {formatDate(date, "DD.MM HH:mm", true)}</span></Typography>
                                <Typography variant='body1'>
                                    {text}
                                </Typography>
                            </Link>
                            <TweetFooterIcons />
                        </СontentTweetWrapper>
                        <IconButton
                            aria-label="more"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                            style={{height: 'fit-content'}}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>
                                Редактировать твит
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                Удалить твит
                            </MenuItem>
                        </Menu>
                    </TweetWrapper>

            </Paper >
        </>
    )
}
