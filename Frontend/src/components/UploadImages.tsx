import ImageIcon from "@mui/icons-material/ImageOutlined";
import {IconButton} from "@mui/material";
import React, {useState} from "react";
import { FlexWrapper } from "./StyledComponents/FlexWrapper";
import styled from "styled-components";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {ImageObj} from "./AddTweetForm";
import {useSnackbar} from "notistack";

export const TweetMedia = styled('img').attrs({
    "data-media": true
})`
  width: ${props => props.width ? props.width : '60px'};
  height:  ${props => props.height ? props.height : '60px'};
  border-radius: 6px;
  overflow: hidden;
  object-fit: cover;
  position: relative;
  &&.medium-zoom-image--opened {
    z-index: 1;
  }
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

interface UploadImagesProps {
    images: ImageObj []
    onChangeImages: (images: ImageObj[]) => void
}

export const UploadImages: React.FC<UploadImagesProps> = ({onChangeImages, images}) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()

    const handleCapture = (e: any) => {
        const file = e.target.files[0]

        if (images.length > 3) {
            enqueueSnackbar('Максимальное кол-во вложений: 4', {
                variant: 'error',
                preventDuplicate: true
            })
            return;
        }

        if (file) {
            const fileObj = new Blob([file])
            // uploadImage
            onChangeImages([...images,
                {blobUrl: URL.createObjectURL(fileObj), file}
            ])
        }
    }

    const removeMediaHandler = (e: React.MouseEvent<SVGElement>, url: string) => {
        onChangeImages(images.filter(image => image.blobUrl !== url))
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
                        images.map((imageObj, idx) => (
                            <TweetMediaItem key={imageObj.blobUrl+idx}>
                                <TweetMedia src={imageObj.blobUrl} />
                                <RemoveTweetMediaItem onClick={(e) => removeMediaHandler(e, imageObj.blobUrl)} />
                            </TweetMediaItem>
                        ))
                    }
                </TweetMediaContainer>
            </FlexWrapper>
        </>
    )
}