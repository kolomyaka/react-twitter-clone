import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTweet } from '../store/slices/currentTweet/currentTweetSlice';
import { selectLoadingStatus, selectTweetItem } from '../store/selectors/currentTweetSelector';
import {CircularProgress, IconButton, Menu, MenuItem, Paper, Typography} from '@mui/material';
import styled from 'styled-components';
import CommentIcon from '@mui/icons-material/ModeCommentOutlined';
import RepeatIcon from '@mui/icons-material/RepeatOutlined';
import LikeIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/ReplyOutlined';
import avaPlaceholder from '../assets/ava-placeholder.png'
import {formatDate} from "../utils/formatDate";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {TweetMedia} from "./UploadImages";
import {TweetImagesContainer} from "./Tweet/Tweet";
const CenterLoader = styled("div")`
  text-align: center;
  margin: 30px 0;
`;

const СontentTweetWrapper = styled.div`
    display: flex;
    //align-items: center;
    margin: 7px 0px;
    width: 100%;

`

const FlexWrapper = styled('div')`
    display: flex;
    align-items: flex-start;  
    flex-direction: column;
    width: 100%;
`

const TweetsCounter = styled('span')`
    font-size: 20px;
    padding-left: 5px;
`

const TweetWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    padding: 10px 25px 15px 20px;
    &:hover {
        background-color: rgb(245, 248, 250);
    }
`

const UserAvatarWrapper = styled('div')`
    margin-right: 15px;
`

const IconsButtonsWrapper = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 450px;
    margin: 3px auto;
`


type Props = {}

export const CurrentTweet = (props: Props) => {
    const params = useParams();
    const id = params.id;
    const dispatch = useDispatch();

    const currentTweetData = useSelector(selectTweetItem);
    const isLoading = useSelector(selectLoadingStatus);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    useEffect(() => {
        if (id) {
            dispatch(setCurrentTweet(id));
        }
    }, [dispatch, id])


    if (isLoading === 'LOADING') {
        return (
            <CenterLoader>
                <CircularProgress />
            </CenterLoader>
        )
    }

    if (currentTweetData) {
        return (
            <Paper square sx={{ borderBottom: 'none', borderLeft: 'none', borderRight: 'none' }} variant='outlined'>
                <TweetWrapper>
                    <СontentTweetWrapper>
                        <UserAvatarWrapper>
                            <img src={currentTweetData.user.avatarUrl ? currentTweetData.user.avatarUrl : avaPlaceholder} style={{ width: 45, height: 45, borderRadius: '50%' }} alt='Аватар пользователя' />
                        </UserAvatarWrapper>
                        <FlexWrapper>
                            <Typography><b>{currentTweetData.user.fullname}</b></Typography>
                            <Typography sx={{ color: '#9e9e9e' }}>@{currentTweetData.user.username}</Typography>
                        </FlexWrapper>
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
                    </СontentTweetWrapper>
                    <Typography variant='body1' style={{ wordBreak: 'break-word', margin: '7px 0' }}>
                        {currentTweetData.text}
                    </Typography>
                    <TweetImagesContainer>
                        {
                            currentTweetData && currentTweetData.images && currentTweetData.images.map((image_url, idx) => (
                                <TweetMedia width={'100%'} height={'auto'} src={image_url}></TweetMedia>
                            ))
                        }
                    </TweetImagesContainer>
                    <Typography sx={{ color: '#9e9e9e' }}>{formatDate(currentTweetData.createdAt, 'HH:MM DD MMM YYYY г.')}</Typography>
                </TweetWrapper>
                <Paper variant='outlined' square sx={{ borderLeft: 'none', borderRight: 'none' }}>
                    <IconsButtonsWrapper>
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
                    </IconsButtonsWrapper>
                </Paper>
            </Paper >
        )
    }

    return null;

}