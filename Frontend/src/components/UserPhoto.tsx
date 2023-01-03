import React from "react";
import avaPlaceholder from '../assets/ava-placeholder.png'

type PropTypes = {
    src?: string
    size: number
}

export const UserPhoto:React.FC<PropTypes> = ({src = '', size = 48}) => {
    return (
        <img
            src={src ? src : avaPlaceholder}
            alt="userAvatar"
            style={{ width: size, height: size, borderRadius: "50%", margin: "5px 13px 0 0" }}
        />
    )
}