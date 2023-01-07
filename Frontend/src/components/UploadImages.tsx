import ImageIcon from "@mui/icons-material/ImageOutlined";
import {IconButton} from "@mui/material";
import React, {useState} from "react";
import { FlexWrapper } from "./StyledComponents/FlexWrapper";
import styled from "styled-components";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const TweetMedia = styled('img')`
  width: 60px;
  height: 60px;
  border-radius: 6px;
  overflow: hidden;
  object-fit: cover;
`

const TweetMediaContainer = styled('div')`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 8px;
`

const TweetMediaItem = styled('div')`
  position: relative;
  
  &:hover svg {
    opacity: 1;
    pointer-events: inherit;
    transition: all .2s ease;
  }
`

const RemoveTweetMediaItem = styled(HighlightOffIcon)`
  && {
    position: absolute;
    top: 2.5px;
    right: 2.5px;
    font-size: 1.3rem;
    opacity: 0;
    pointer-events: none;
    cursor: pointer;
    border-radius: 15px;
    transition: all .2s;
    background-color: rgba(0, 0, 0, 0.48);
    color: #fff;
  }
  
  
`

export const UploadImages = () => {

    const [images, setImages] = useState<string[]>([]);

    const handleCapture = (e: any) => {
        const file = e.target.files[0]
        if (file) {
            const fileObj = new Blob([file])
            // uploadImage
            setImages(prev => [...prev, URL.createObjectURL(fileObj)])
        }
    }

    const removeMediaHandler = (e: React.MouseEvent<SVGElement>, url: string) => {
        setImages(prev => prev.filter(image => image !== url))
    }

    return (
        <>
            <FlexWrapper row={false} alignItems={'flex-start'}>
                <FlexWrapper alignItems={'center'}>
                    <input type="file" onChange={handleCapture} hidden id={'upload-input'} />
                    <label htmlFor={'upload-input'}>
                        <IconButton component="span">
                            <ImageIcon color='primary' />
                        </IconButton>
                    </label>
                </FlexWrapper>
                <TweetMediaContainer>
                    {
                        images.map(url => (
                            <TweetMediaItem>
                                <TweetMedia src={url} />
                                <RemoveTweetMediaItem onClick={(e) => removeMediaHandler(e, url)} />
                            </TweetMediaItem>
                        ))
                    }
                </TweetMediaContainer>
            </FlexWrapper>
        </>
    )
}