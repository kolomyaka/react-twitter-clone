import {IconButton} from "@mui/material";
import CommentIcon from "@mui/icons-material/ModeCommentOutlined";
import RepeatIcon from "@mui/icons-material/RepeatOutlined";
import LikeIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareIcon from "@mui/icons-material/ReplyOutlined";
import React from "react";
import styled from "styled-components";

const FlexWrapper = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: -8px;
    margin: 0 20px 0 0;
    max-width: 600px;
`

const TweetsCounter = styled('span')`
    font-size: 20px;
    padding-left: 5px;
`

const IconContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TweetFooterIcons = () => {
    return (
        <FlexWrapper>
            <IconContainer>
                <IconButton>
                    <CommentIcon style={{ fontSize: '19px' }} />
                </IconButton>
                <TweetsCounter>1</TweetsCounter>
            </IconContainer>
            <IconContainer>
                <IconButton>
                    <RepeatIcon style={{ fontSize: '19px' }} />
                </IconButton>
            </IconContainer>
            <IconContainer>
                <IconButton>
                    <LikeIcon style={{ fontSize: '19px' }} />
                </IconButton>
            </IconContainer>
            <IconContainer>
                <IconButton>
                    <ShareIcon style={{ fontSize: '19px' }} />
                </IconButton>
            </IconContainer>
        </FlexWrapper>
    )
}