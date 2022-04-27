import React from 'react'
import { useParams } from 'react-router';
import { Tweet } from './Tweet/Tweet'

type Props = {}

export const CurrentTweet = (props: Props) => {
    const params = useParams();
    console.log(params.id);

    return (
        <>

        </>
    )
}