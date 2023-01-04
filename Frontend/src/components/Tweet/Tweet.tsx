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
import {TweetMenuDropdown} from "./TweetMenuDropdown";

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
    userId: string | undefined
}

type User = {
    fullname: string
    avatarUrl: string
    username: string
    _id: string
}

export const Tweet = ({ user, text, id, date, userId }: Props) => {

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
                        {
                            user._id === userId && <TweetMenuDropdown id={id} />
                        }
                    </TweetWrapper>

            </Paper >
        </>
    )
}
