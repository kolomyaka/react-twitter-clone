import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Divider from '@mui/material/Divider';


type Props = {
  title?: string
  children: React.ReactNode
  visible?: boolean
  setWidth: number | string
  setPadding: number
  handleClickClose: () => void
}

export const Modal: React.FC<Props> = ({ title, setPadding, setWidth, children, visible = false, handleClickClose }: Props): React.ReactElement | null => {

  if (!visible) {
    return null;
  }

  return (
    <div>
      <Dialog open={visible} onBackdropClick={handleClickClose}>
        <DialogTitle id="form-dialog-title" style={{ display: 'flex', alignItems: 'center', padding: '5px' }}>
          <IconButton onClick={handleClickClose} color="primary">
            <CloseIcon style={{ fontSize: 26 }} />
          </IconButton>
          {title}
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ width: setWidth, padding: setPadding }}>
          {children}
        </DialogContent>
      </Dialog>
    </div >
  );
};
