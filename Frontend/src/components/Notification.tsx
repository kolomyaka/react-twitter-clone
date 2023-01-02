import React, {useState} from 'react'
import {Alert, AlertColor, Snackbar} from "@mui/material";

interface NotificationProps {
    children: (callback: (text:string, type: AlertColor) => void) => React.ReactElement
}

export const Notification: React.FC<NotificationProps> = ({children}) => {
    const [open, setOpen] = useState<boolean>(false)
    const [notificationObj, setNotificationObj] = useState<{ text: string; type: AlertColor }>()

    const openNotification = (text: string, type: AlertColor) => {
        setNotificationObj({
            text,
            type
        })
        setOpen(true)
    }

    return (
        <>
            {children(openNotification)}
            <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={() => setOpen(false)} severity={notificationObj?.type}>
                    {notificationObj?.text}
                </Alert>
            </Snackbar>
        </>
    )
}