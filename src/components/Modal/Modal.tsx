import React from "react";
import {
  Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    FormGroup,
    IconButton,
    TextField,
    Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  title: string
  children: React.ReactNode
  visible?: boolean
  handleClickClose : () => void
}

export const Modal: React.FC<Props> = ({title, children, visible = false, handleClickClose}: Props ): React.ReactElement | null => {
  
  if (!visible) {
    return null;
  }

  return (
    <>
      <Dialog open={visible} onBackdropClick={handleClickClose}>
        <DialogTitle id="form-dialog-title" style={{display: 'flex', alignItems: 'center'}}> 
          <IconButton onClick={handleClickClose} color="primary">
            <CloseIcon style={{ fontSize: 26 }} />
          </IconButton>
          {title}
        </DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
      </Dialog>
    </>
  );
};
