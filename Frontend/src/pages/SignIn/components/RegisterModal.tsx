import {FormControl, FormGroup} from "@mui/material";
import Button from "@mui/material/Button";
import {Modal} from "../../../components/Modal/Modal";
import React from "react";
import {TextFieldEl} from "../SignIn";

type RegisterModalProps = {
    open: boolean
    handleCloseModal: () => void
}

export const RegisterModal: React.FC<RegisterModalProps> = ({open, handleCloseModal}): React.ReactElement => {
    return (
        <Modal setPadding={2} setWidth={'auto'} title='Создайте учетную запись' visible={open} handleClickClose={handleCloseModal}>
            <FormControl component="fieldset" fullWidth>
                <FormGroup aria-label="position" row>
                    <TextFieldEl
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Имя"
                        type="name"
                        fullWidth
                        variant="filled"
                    />
                    <TextFieldEl
                        variant="filled"
                        margin="dense"
                        id="email"
                        label="Электронная почта"
                        type="email"
                        fullWidth
                    />
                    <TextFieldEl
                        variant="filled"
                        margin="dense"
                        id="password"
                        label="Пароль"
                        type="password"
                        fullWidth
                    />
                    <Button
                        style={{ borderRadius: 15, marginTop: 10 }}
                        onClick={handleCloseModal}
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Регистрация
                    </Button>
                </FormGroup>
            </FormControl>

        </Modal>
    )
}