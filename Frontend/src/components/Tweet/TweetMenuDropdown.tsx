import {IconButton, Menu, MenuItem} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import {useDispatch} from "react-redux";
import {deleteTweetFetch} from "../../store/slices/Tweets/tweetSlice";

type PropTypes = {
    id: string
}

export const TweetMenuDropdown: React.FC<PropTypes> = ({id}) => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch()
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeleteTweet = () => {
        dispatch(deleteTweetFetch(id))
    }

    return <>
        <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
            style={{height: 'fit-content'}}
        >
            <MoreVertIcon />
        </IconButton>
        <Menu
            id="long-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>
                Редактировать твит
            </MenuItem>
            <MenuItem onClick={handleDeleteTweet}>
                Удалить твит
            </MenuItem>
        </Menu>
    </>
}