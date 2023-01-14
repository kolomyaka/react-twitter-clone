import {CircularProgress, Container, Grid, InputAdornment, Paper, TextField} from "@mui/material";
import {Sidebar} from "../Sidebar";
import {UserInfo} from "../UserInfo";
import {HeaderTitle} from "../HeaderTitle";
import {Route, Routes} from "react-router";
import {AddTweetForm} from "../AddTweetForm";
import {CurrentTweet} from "../CurrentTweet";
import {Tweet} from "../Tweet/Tweet";
import SearchIcon from "@mui/icons-material/Search";
import {Users} from "../Users";
import React from "react";
import styled from "styled-components";


const RightSide = styled("div")`
  position: fixed;
  top: 0;
  padding-top: 15px;
`;


const CenterLoader = styled("div")`
  text-align: center;
  margin-top: 20px;
`;

const SidebarContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  position: fixed;
`

const SearchTextBlock = styled(TextField)`
  * {
    border: none;
  }

  div {
    background-color: #e6ecf0;
    border-radius: 30px;
  }

  input {
    background-color: #E6ECF0;
    padding: 7px;
    border-radius: 30px;
  }
  input:focus {
    border: none;
  }

  div:focus {
    border: none;
    outline: none;
  }

  fieldset {
    border: none;
  }
`;

export const Layout = ({headElement, contentElement}: any) => {

    return (
        <>
            <Container maxWidth={'xl'}>
                <Grid container spacing={2}>
                    <Grid item md={3}  xl={2.5}>
                        <SidebarContainer>
                            <Sidebar />
                            <UserInfo />
                        </SidebarContainer>
                    </Grid>
                    <Grid item md={6}  xl={7} sx={{paddingLeft: '0px !important'}}>
                        <Paper
                            square
                            sx={{ borderBottom: 0, borderTop: 0, height: '100%', minHeight: '100vh'}}
                            variant="outlined"
                        >
                            <HeaderTitle />
                            {headElement}
                            {contentElement}
                        </Paper>
                    </Grid>
                    <Grid item md={3}  xl={2.5}>
                        <RightSide>
                            <SearchTextBlock
                                fullWidth
                                placeholder="Поиск по Твиттеру"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {/*<Tags />*/}
                            <Users />
                        </RightSide>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}