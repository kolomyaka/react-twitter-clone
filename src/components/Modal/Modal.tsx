import React, { useState } from "react";
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
  children: React.ReactNode;
}

export const Modal: React.FC<Props> = ({title, children}: Props ): React.ReactElement => {
  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  
  return (
    <>
      <Dialog open={open} onBackdropClick={handleClickClose}>
        <DialogTitle id="form-dialog-title">
          <IconButton onClick={handleClickClose} color="primary">
            <CloseIcon style={{ fontSize: 26 }} />
          </IconButton>
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Для входа в аккаунт, пожалуйста, введите Вашу почту здесь.
          </DialogContentText>
          <FormControl component="fieldset" fullWidth>
            <FormGroup aria-label="position" row>
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="filled"
              />
              <TextField
                variant="filled"
                margin="dense"
                id="password"
                label="Password"
                type="password"
                fullWidth
              />
              <Button
                style={{ borderRadius: 15, marginTop: 10 }}
                onClick={handleClickClose}
                variant="contained"
                fullWidth
                color="primary"
              >
                Войти
              </Button>
            </FormGroup>
          </FormControl>
        </DialogContent>
      </Dialog>
    </>
  );
};
