import ImageIcon from "@mui/icons-material/ImageOutlined";
import {IconButton} from "@mui/material";
import React, {useState} from "react";
import { FlexWrapper } from "./StyledComponents/FlexWrapper";

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
                <div>
                    {
                        images.map(url => (
                            <img src={url} alt={'tweet-photo'} />
                        ))
                    }
                </div>
            </FlexWrapper>
        </>
    )
}