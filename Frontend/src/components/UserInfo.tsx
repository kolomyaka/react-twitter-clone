import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {UserPhoto} from "./UserPhoto";
import styled from "styled-components";
import {IconButton, Menu, MenuItem} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {selectUserData} from "../store/selectors/userSelector";
import React from "react";
import {setUserData, setUserLoadingState} from "../store/slices/User/UserSlice";
import {LoadingState} from "../types";


const UserInfoContainer = styled('div')`
  display: flex;
  align-items: center;
`

const UserData = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 12px;
`

export const UserFullName = styled('span')`
  font-weight: 700;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #000;
`

export const UserUsername = styled('span')`
  color: rgb(83, 100, 113);
  font-size: 15px;
`

export const UserInfo = () => {

    const userData = useSelector(selectUserData);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch()

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logoutHandler = () => {
        localStorage.removeItem('token')
        dispatch(setUserLoadingState(LoadingState.NEVER))
        dispatch(setUserData(undefined))
    }

    return (
        <>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
                style={{height: 'fit-content', borderRadius: 30, margin: '22px 0'}}
            >
                <UserInfoContainer>
                    <UserPhoto size={40} margin={'0'} />
                    <UserData>
                        <UserFullName>{userData?.fullname}</UserFullName>
                        <UserUsername>@{userData?.username}</UserUsername>
                    </UserData>
                    <ExpandMoreIcon fontSize={'small'} />
                </UserInfoContainer>
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                onClose={handleClose}
            >
                <MenuItem>
                    Мой профиль
                </MenuItem>
                <MenuItem onClick={logoutHandler}>
                    Выйти
                </MenuItem>
            </Menu>
        </>
    )
}