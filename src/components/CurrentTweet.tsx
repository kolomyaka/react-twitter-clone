import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { Tweet } from './Tweet/Tweet'
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTweet } from '../store/slices/currentTweet/currentTweetSlice';
import { selectLoadingStatus, selectTweetItem } from '../store/selectors/currentTweetSelector';
import { CircularProgress } from '@mui/material';
import styled from 'styled-components';


const CenterLoader = styled("div")`
  text-align: center;
  margin: 30px 0;
`;


type Props = {}

export const CurrentTweet = (props: Props) => {
    const params = useParams();
    const id = params.id;
    const dispatch = useDispatch();

    const currentTweetData = useSelector(selectTweetItem);
    const isLoading = useSelector(selectLoadingStatus);


    useEffect(() => {
        if (id) {
            dispatch(setCurrentTweet(id));
        }
    }, [id])


    if (isLoading === 'LOADING' || isLoading === 'NEVER') {
        return (
            <CenterLoader>
                <CircularProgress />
            </CenterLoader>
        )
    }

    if (currentTweetData) {
        return (
            <Tweet user={currentTweetData.user} text={currentTweetData.text} id={currentTweetData._id} />
        )
    }

    return null;

}