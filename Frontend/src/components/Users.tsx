import {IconButton, Paper, Typography} from "@mui/material";
import AddPersonIcon from "@mui/icons-material/PersonAddOutlined";
import React, {useEffect} from "react";
import styled from "styled-components";
import {FlexWrapperProps} from "../pages/Home";
import {useDispatch, useSelector} from "react-redux";
import {selectUsersItems} from "../store/selectors/usersSelector";
import {fetchUsers} from "../store/slices/Users/UsersSlice";
import avaPlaceholder from '../assets/ava-placeholder.png'

const RightSideBlock = styled("div")`
  background-color: #f5f8fa;
  margin-top: 20px;
  border-radius: 20px;
`;

const RightSideContent = styled("div")`
  cursor: pointer;
  border-radius: 20px;
  div {
    &:hover {
      transition: all 300ms ease-in-out;
      background-color: #e6ecf0;
    }
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: ${(props: FlexWrapperProps) => props.align};
  flex-direction: ${(props: FlexWrapperProps) => props.direction};
`;


export const Users: React.FC = () => {
    const dispatch = useDispatch()
    const items = useSelector(selectUsersItems)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    if (items && items.length) {
        return (
            <RightSideBlock>
                <Paper
                    square
                    variant="outlined"
                    sx={{
                        backgroundColor: "#F5F8FA",
                        border: "none",
                        borderRadius: "20px",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{ padding: "13px", fontWeight: "700", fontSize: "1" }}
                    >
                        Кого читать
                    </Typography>
                </Paper>
                <RightSideContent>
                    {
                        items && items.map((user) => (
                            <Paper
                                key={user._id}
                                square
                                variant="outlined"
                                sx={{
                                    backgroundColor: "#F5F8FA",
                                    padding: "13px",
                                    border: "none",
                                }}
                            >
                                <FlexWrapper align="center">
                                    <img
                                        src={avaPlaceholder}
                                        alt="userAvatar"
                                        style={{ width: 35, height:35, borderRadius: "50%", margin: "5px 13px 0 0" }}
                                    />
                                    <FlexWrapper direction="column">
                                        <div style={{ fontSize: "15px", fontWeight: 700 }}>
                                            {user.fullname}
                                        </div>
                                        <div style={{ fontSize: "12px", color: "#9e9e9e" }}>
                                            @{user.username}
                                        </div>
                                    </FlexWrapper>
                                    <IconButton sx={{ marginLeft: "40px" }}>
                                        <AddPersonIcon color="primary" />
                                    </IconButton>
                                </FlexWrapper>
                            </Paper>
                        ))
                    }
                    <Paper
                        square
                        variant="outlined"
                        sx={{
                            backgroundColor: "#F5F8FA",
                            border: "none",
                            borderEndEndRadius: "20px",
                            borderBottomLeftRadius: "20px",
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                padding: "13px",
                                fontWeight: "400",
                                color: "#1976d2",
                                fontSize: "15px",
                            }}
                        >
                            Показать еще
                        </Typography>
                    </Paper>
                </RightSideContent>
            </RightSideBlock>
        )
    } else {
        return null;
    }
}