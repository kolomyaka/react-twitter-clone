import React, {useEffect, useState} from "react";
import avaPlaceholder from "../../assets/ava-placeholder.png";
import {Avatar, IconButton, Menu, MenuItem, Paper, Typography} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {TweetImagesContainer} from "../../components/Tweet/Tweet";
import {TweetMedia} from "../../components/UploadImages";
import {formatDate} from "../../utils/formatDate";
import CommentIcon from "@mui/icons-material/ModeCommentOutlined";
import RepeatIcon from "@mui/icons-material/RepeatOutlined";
import LikeIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareIcon from "@mui/icons-material/ReplyOutlined";
import styled from "styled-components";
// @ts-ignore
import analyze from 'rgbaster'

type BackgroundAvatarProps = {
    backgroundColor: string | undefined
}

const BackgroundAvatar = styled('div')<BackgroundAvatarProps>`
  height: 200px;
  width: 100%;
  background: ${(props: BackgroundAvatarProps) => props.backgroundColor?props.backgroundColor:'rgba(0,0,0,.3)'};
  position: relative;
`

const UserProfileAvatar = styled('img')`
  position: absolute;
  left: 20px;
  bottom: -50%;
  transform: translate(0, -50%);
  border: 2px solid #fff;
  border-radius: 50%;
`

export const HeadUserProfile:React.FC = () => {

    const [backgroundColor, setBackgroundColor] = useState(undefined);

    const analyzeUserAvatar = async () => {
        const result = await analyze(avaPlaceholder)
        setBackgroundColor(result[0].color)
    }

    useEffect(() => {
        analyzeUserAvatar()
    }, [])


    return (
        <>
            <Paper square sx={{ borderBottom: 'none', borderLeft: 'none', borderRight: 'none' }} variant='outlined'>
                <BackgroundAvatar backgroundColor={backgroundColor}>
                    <UserProfileAvatar width={100} height={100} src={avaPlaceholder}/>
                </BackgroundAvatar>
            </Paper >
        </>
    )
}