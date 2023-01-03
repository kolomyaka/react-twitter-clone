import React, { useState } from 'react'
import ImageIcon from '@mui/icons-material/ImageOutlined';
import SmileIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import styled from 'styled-components';
import { Alert, Button, CircularProgress, IconButton, TextareaAutosize } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setTextForNewTweet } from '../store/slices/Tweets/tweetSlice';
import { useSelector } from 'react-redux';
import { selectAddTweetLoadingStatus } from '../store/selectors/tweetSelectors';
import {LoadingState} from "../types";

const AddTweetWrapper = styled('div')`
    display: flex;
    align-items: flex-start;
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-left: none;
    border-right: none;
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


export const AddTweetForm = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState<string>('');
    const MAX_LIMIT = 280;
    const textLimitPercent = Math.round((text.length / MAX_LIMIT) * 100);
    const maxLength = MAX_LIMIT - text.length;
    const addTweetIsLoading = useSelector(selectAddTweetLoadingStatus);

    const handleClickAddTweet = () => {
        dispatch(setTextForNewTweet(text));
        setText('')
    }

    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            setText(e.currentTarget.value);
        }
    }

    return (
        <>
            <AddTweetWrapper>
                <AddTweetAvatar>
                    <img style={{ borderRadius: '50%', margin: '7px 10px' }} src='https://i.pravatar.cc/45' alt="userAvatar" />
                </AddTweetAvatar>
                <AddTweetTextField>
                    <TextareaAutosize
                        onChange={handleChangeTextarea}
                        aria-label="empty textarea"
                        placeholder="Что происходит?"
                        style={{ minHeight: '60px', fontFamily: 'inherit' }}
                        value={text}
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
                            {
                                text && (
                                    <>
                                        <span>{maxLength}</span>
                                        <CircularWrapper>
                                            <CircularProgress
                                                sx={{ position: 'absolute', top: 0, left: 0, color: 'rgba(29,161,242)' }}
                                                variant='determinate'
                                                size={20}
                                                value={text.length > MAX_LIMIT ? 100 : textLimitPercent}
                                                style={text.length > MAX_LIMIT ? { color: 'red' } : undefined}
                                            />
                                            <CircularProgress
                                                style={{ color: 'rgba(0,0,0,0.1)' }}
                                                variant='determinate'
                                                size={20}
                                                thickness={6}
                                                value={100}
                                            />
                                        </CircularWrapper>
                                    </>
                                )
                            }
                            <Button
                                onClick={handleClickAddTweet}
                                disabled={!text || text.length > MAX_LIMIT}
                                variant='contained' sx={{ borderRadius: '20px' }}>
                                {addTweetIsLoading === LoadingState.LOADING ? <CircularProgress size={17} /> : "Твитнуть"}
                            </Button>
                        </FlexWrapper>
                    </AddTweetFooter>
                </AddTweetTextField>
            </AddTweetWrapper>
            {addTweetIsLoading === LoadingState.ERROR ? <Alert severity="error">Ошибка при добавлении поста! 😥</Alert> : null}

        </>
    )
}