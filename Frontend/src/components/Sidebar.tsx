import { Button, Hidden, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import NotificationIcon from "@mui/icons-material/NotificationsNone";
import MessageIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListIcon from "@mui/icons-material/ListAlt";
import UserIcon from "@mui/icons-material/PersonOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import CreateIcon from "@mui/icons-material/CreateOutlined";
import { Modal } from "./Modal/Modal";
import { AddTweetForm } from "./AddTweetForm";
import { Link } from "react-router-dom";

const IconsList = styled("ul")`
  list-style: none;
  margin: 0;
  margin-top: 10px;
  margin-right: 0;
  padding-left: 20px;
  position: sticky;
  top: 0;
  left: 0;
  max-width: 230px;
  
`;

const IconsListItem = styled("li")`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 15px;
  margin-right: 0;
  border-radius: 20px;
  transition: all 300ms ease-in-out;
  & h6 {
    font-weight: 500;
    font-size: 20px;
    margin-left: 15px;
  }
  & svg {
    font-size: 30px;
    & path {
      transition: all 300ms ease-in-out;
    }
  }
  &:hover {
    background-color: rgb(29, 161, 242, 0.1);
    color: rgb(29, 161, 242);
    & svg path {
      fill: rgb(29, 161, 242);
    }
  }
  @media (max-width: 880px) {
    padding-right: 0;
    max-width: 45px;
  }
`;

type Props = {};

export const Sidebar = (props: Props) => {
  const [addTweetVisible, setAddTweetVisible] = useState<boolean>(false);

  const openAddTweet = () => {
    setAddTweetVisible(true);
  };

  const onCloseAddTweet = () => {
    setAddTweetVisible(false);
  };

  return (
    <>
      <IconsList>
        <Link to={`/`}>
          <IconButton aria-label="delete" color="primary">
            <TwitterIcon fontSize={"large"} color="primary" />
          </IconButton>
        </Link>
        <IconsListItem>
          <IconButton aria-label="delete">
            <SearchIcon sx={{ color: "#000" }} />
          </IconButton>
          <Hidden mdDown>
            <Typography variant="h6">Поиск</Typography>
          </Hidden>
        </IconsListItem>
        <IconsListItem>
          <IconButton aria-label="delete">
            <NotificationIcon sx={{ color: "#000" }} />
          </IconButton>
          <Hidden mdDown>
            <Typography variant="h6">Уведомления</Typography>
          </Hidden>
        </IconsListItem>
        <IconsListItem>
          <IconButton aria-label="delete">
            <MessageIcon sx={{ color: "#000" }} />
          </IconButton>
          <Hidden mdDown>
            <Typography variant="h6">Сообщения</Typography>
          </Hidden>
        </IconsListItem>
        <IconsListItem>
          <IconButton aria-label="delete">
            <BookmarkBorderIcon sx={{ color: "#000" }} />
          </IconButton>
          <Hidden mdDown>
            <Typography variant="h6">Закладки</Typography>
          </Hidden>
        </IconsListItem>
        <IconsListItem>
          <IconButton aria-label="delete">
            <ListIcon sx={{ color: "#000" }} />
          </IconButton>
          <Hidden mdDown>
            <Typography variant="h6">Список</Typography>
          </Hidden>
        </IconsListItem>
        <IconsListItem>
          <IconButton aria-label="delete">
            <UserIcon sx={{ color: "#000" }} />
          </IconButton>
          <Hidden mdDown>
            <Typography variant="h6">Профиль</Typography>
          </Hidden>
        </IconsListItem>
        <Hidden mdUp>
          <CreateIcon
            onClick={openAddTweet}
            sx={{
              cursor: "pointer",
              color: "#fff",
              borderRadius: 20,
              fontSize: 26,
              padding: 1,
              backgroundColor: "rgb(29,161,242)",
            }}
          />
        </Hidden>
        <Hidden mdDown>
          <Button
            onClick={openAddTweet}
            variant="contained"
            color="primary"
            sx={{ borderRadius: "20px", marginTop: "10px", width: "230px" }}
          >
            <Typography>Твитнуть</Typography>
          </Button>
        </Hidden>
        <Modal
          setPadding={0}
          title=""
          setWidth={570}
          visible={addTweetVisible}
          handleClickClose={onCloseAddTweet}
        >
          <AddTweetForm />
        </Modal>
      </IconsList>
    </>
  );
};
