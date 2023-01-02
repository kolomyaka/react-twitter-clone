import {AlertColor, FormControl, FormGroup, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {Modal} from "../../../components/Modal/Modal";
import React, {useEffect} from "react";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import {Notification} from "../../../components/Notification";
import {useDispatch, useSelector} from "react-redux";
import {fetchSignIn} from "../../../store/slices/User/UserSlice";
import {selectUserErrorMessage, selectUserStatus} from "../../../store/selectors/userSelector";
import {LoadingState} from "../../../types";
import {useSnackbar} from "notistack";

interface LoginModalProps {
    open: boolean
    handleCloseModal: () => void
}

const LoginFormSchema = yup.object({
    email: yup.string().required("Введите почту"),
    password: yup.string().min(6, "Минимальная длина пароля 6 символов").required(),
}).required();

export interface LoginFormModalProps {
    email: string
    password: string
}

export const LoginModal: React.FC<LoginModalProps> = ({open, handleCloseModal}): React.ReactElement => {
    const dispatch = useDispatch()
    const { control, handleSubmit, formState:{ errors } } = useForm<LoginFormModalProps>({
        resolver: yupResolver(LoginFormSchema)
    });

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const loadingStatus = useSelector(selectUserStatus)
    const errorMessage = useSelector(selectUserErrorMessage)

    const onSubmit = async (openNotification: (text:string, type: AlertColor) => void, data: LoginFormModalProps) => {
        try {
            dispatch(fetchSignIn(data))
        } catch (e) {
            enqueueSnackbar("Произошла ошибка, попробуйте снова", {variant: 'error'})
        }
    };

    useEffect(() => {
        switch (loadingStatus) {
            case LoadingState.SUCCESS:
                enqueueSnackbar('Успешная авторизация', {
                    variant: 'success'
                })
                handleCloseModal()
                break;
            case LoadingState.ERROR:
                enqueueSnackbar(errorMessage, {variant: 'error'})
        }

    }, [loadingStatus, errorMessage])

    return (
        <Notification>
            {openNotification => (
                <Modal setPadding={2} setWidth={'500px'} title='Войти' visible={open} handleClickClose={handleCloseModal}>
                <form onSubmit={handleSubmit(onSubmit.bind(null, openNotification))}>
                    <FormControl component="fieldset" fullWidth>
                        <FormGroup aria-label="position" row>

                            <Controller
                                defaultValue=''
                                render={({ field }) =>
                                    <TextField
                                        {...field}
                                        helperText={errors.email?.message}
                                        error={!!errors.email}
                                        margin="dense"
                                        id="email"
                                        label="Электронная почта или логин"
                                        type='text'
                                        fullWidth
                                        variant="filled"

                                    />}
                                name="email"
                                control={control}
                            />
                            <Controller
                                render={({field}) =>
                                <TextField
                                    helperText={errors.password?.message}
                                    error={!!errors.password}
                                    margin="dense"
                                    id="password"
                                    label="Пароль"
                                    defaultValue=''
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