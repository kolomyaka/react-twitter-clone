import React from 'react'
import ImageIcon from '@mui/icons-material/ImageOutlined';
import SmileIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import styled from 'styled-components';
import { Button, CircularProgress, IconButton, TextareaAutosize } from '@mui/material';

const AddTweetWrapper = styled('div')`
    display: flex;
    align-items: flex-start;
`

const AddTweetAvatar = styled('div')`

`

const AddTweetTextField = styled('div')`
    width: 100%;
    padding-right: 15px;
    margin-top: 5px;
    textarea {
        border: none;
        resize: none;
        width: 100%;
        font-size: 20px;
        &:focus {
            outline:none;
        }
    }
`

const CircularWrapper = styled('div')`
    position: relative;
    top: 0;
    margin: 5px 10px 0 10px;

`


const AddTweetFooter = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`

const FlexWrapper = styled('div')`
    display: flex;
    align-items: center;
`

type Props = {}

export const AddTweetForm = (props: Props) => {
    return (
        <>
            <AddTweetWrapper>
                <AddTweetAvatar>
                    <img style={{ borderRadius: '50%', margin: '7px 10px' }} src='https://i.pravatar.cc/45' alt="userAvatar" />
                </AddTweetAvatar>
                <AddTweetTextField>
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Что происходит?"
                        style={{ minHeight: '70px' }}
                    />
                    <AddTweetFooter>
                        <FlexWrapper>
                            <IconButton>
                                <ImageIcon color='primary' />
                            </IconButton>
                            <IconButton>
                                <SmileIcon color='primary' />
                            </IconButton>
                        </FlexWrapper>
                        <FlexWrapper>
                            <span>280</span>
                            <CircularWrapper>
                                <CircularProgress sx={{ position: 'absolute', top: 0, left: 0, color: 'rgba(29,161,242)' }} variant='determinate' size={20} value={20} />
                                <CircularProgress
                                    style={{ color: 'rgba(0,0,0,0.1)' }}
                                    variant='determinate'
                                    size={20}
                                    thickness={4}
                                    value={100}
                                />
                            </CircularWrapper>
                            <Button variant='contained' sx={{ borderRadius: '20px' }}>Твитнуть</Button>
                        </FlexWrapper>
                    </AddTweetFooter>
                </AddTweetTextField>
            </AddTweetWrapper>
        </>
    )
}