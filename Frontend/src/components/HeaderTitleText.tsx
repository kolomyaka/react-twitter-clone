import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {selectUserData} from "../store/selectors/userSelector";
import {Typography} from "@mui/material";
import { FlexWrapper } from "./StyledComponents/FlexWrapper";
import {selectTweetsItems} from "../store/selectors/tweetSelectors";

interface PropsTypes {
    pathname: string
}

export const HeaderTitleText: React.FC<PropsTypes> = ({pathname}) => {

    const [path, setPath] = useState<string>('');
    const userData = useSelector(selectUserData);
    const tweets = useSelector(selectTweetsItems)

    const configureHeaderTitleText = () => {
        if (pathname.includes('/tweet')) {
            setPath('tweet')
        } else if (pathname.includes('/user')) {
            setPath('user')
        } else {
            setPath('')
        }
    }

    useEffect(() => {
        configureHeaderTitleText()
    }, [pathname])


    switch (path) {
        case 'tweet':
            return <>Твитнуть</>
            break;
        case 'user':
            return <FlexWrapper alignItems={'flex-start'}>
                <Typography sx={{fontWeight: 700, fontSize: '20px'}}>{userData?.fullname}</Typography>
                <Typography>{tweets.length} твита</Typography>
            </FlexWrapper>
            break;
        default:
            return <>Главная</>
            break;
    }

}