import {FormControl, FormGroup, TextField, Snackbar, AlertColor} from "@mui/material";
import Button from "@mui/material/Button";
import {Modal} from "../../../components/Modal/Modal";
import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {authApi} from "../../../services/authApi";
import {Notification} from "../../../components/Notification";

interface LoginModalProps {
    open: boolean
    handleCloseModal: () => void
}

const LoginFormSchema = yup.object({
    email: yup.string().email('Неверная почта').required("Введите почту"),
    password: yup.string().min(6, "Минимальная длина пароля 6 символов").required(),
}).required();

export interface LoginFormModalProps {
    email: string
    password: string
}

export const LoginModal: React.FC<LoginModalProps> = ({open, handleCloseModal}): React.ReactElement => {
    const { control, handleSubmit, formState:{ errors } } = useForm<LoginFormModalProps>({
        resolver: yupResolver(LoginFormSchema)
    });
    const onSubmit = async (openNotification: (text:string, type: AlertColor) => void, data: LoginFormModalProps) => {
        try {
            const userData = await authApi.signIn(data)
        } catch (e) {
            openNotification("Неверный логин или пароль", 'error')
        }
    };

    console.log(errors)

    return (
        <Notification>
            {openNotification => (
                <Modal setPadding={2} setWidth={'500px'} title='Войти' visible={open} handleClickClose={handleCloseModal}>
                <form onSubmit={handleSubmit(onSubmit.bind(null, openNotification))}>
                    <FormControl component="fieldset" fullWidth>
                        <FormGroup aria-label="position" row>

                            <Controller
                                render={({ field }) =>
                                    <TextField
                                        helperText={errors.email?.message}
                                        error={!!errors.email}
                                        autoFocus
                                        margin="dense"
                                        id="email"
                                        label="Электронная почта"
                                        type="email"
                                        fullWidth
                                        variant="filled"
                                        {...field}
                                    />}
                                name="email"
                                control={control}
                            />
                            <Controller render={({field}) =>
                                <TextField
                                    helperText={errors.password?.message}
                                    error={!!errors.password}
                                    margin="dense"
                                    id="password"
                                    label="Пароль"
                                    type="password"
                                    fullWidth
                                    variant="filled"
                                    {...field}
                                />}
                                        name={'password'}
                                        control={control}
                            />
                            <Button
                                type={'submit'}
                                style={{ borderRadius: 15, marginTop: 10 }}
                                // onClick={handleCloseModal}
                                variant="contained"
                                fullWidth
                                color="primary"
                            >
                                Войти
                            </Button>
                        </FormGroup>
                    </FormControl>
                </form>
            </Modal>
            )}
        </Notification>
    )
}