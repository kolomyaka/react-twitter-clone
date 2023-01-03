import React from "react";
import avaPlaceholder from '../assets/ava-placeholder.png'

type PropTypes = {
    src?: string
    size: number
    margin?: string
}

export const UserPhoto:React.FC<PropTypes> = ({src = '', size = 48, margin = '5px 13px 0 0'}) => {
    return (
        <img
            src={src ? src : avaPlaceholder}
            alt="userAvatar"
            style={{ width: size, height: size, borderRadius: "50%", margin: margin }}
        />
    )
}