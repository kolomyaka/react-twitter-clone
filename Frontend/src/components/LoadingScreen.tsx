import {FlexWrapper} from "./StyledComponents/FlexWrapper";
import TwitterIcon from "@mui/icons-material/Twitter";
import {LoadingState} from "../types";
import {Typography} from "@mui/material";
import React, {useEffect} from "react";
import styled from "styled-components";
import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {confirmUser, setUserLoadingState} from "../store/slices/User/UserSlice";
import {selectUserStatus} from "../store/selectors/userSelector";
import {useSnackbar} from "notistack";

const Centered = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

interface LoadingScreenProps {
    userLoadingStatus?: LoadingState
    activateScreen?: boolean
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({userLoadingStatus, activateScreen}) => {

    const params = useParams()
    const dispatch = useDispatch()
    const loadingStatus = useSelector(selectUserStatus);
    const navigate = useNavigate()
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()

    const redirectAfterConfirm = () => {
        enqueueSnackbar('Успешная активация аккаунта', {
            variant: 'success',
            preventDuplicate: true
        })
        navigate('/signin')
        dispatch(setUserLoadingState(LoadingState.NEVER))
    }

    useEffect(() => {
        if (activateScreen) {
            dispatch(confirmUser(params.hash))
        }
    }, []);

    useEffect(() => {
        if (loadingStatus === LoadingState.CONFIRMED) {
            redirectAfterConfirm()
        }
    }, [loadingStatus]);

    return (
        <>
            <Centered>
                <FlexWrapper>
                    <TwitterIcon color="primary" style={{width: 80, height: 80}} />
                    {
                        userLoadingStatus === LoadingState.LOADED && <FlexWrapper>
                            <Typography
                                variant="h4"
                                align={'center'}
                                fontWeight={700}
                                fontSize={32}
                                mb={"35px"}
                                mt={"15px"}
                            >
                                Письмо с кодом активации было отправлено вам на почту
                            </Typography>
                        </FlexWrapper>
                    }
                </FlexWrapper>
            </Centered>
        </>
    )
}