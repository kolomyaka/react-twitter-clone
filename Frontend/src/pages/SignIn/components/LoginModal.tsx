import {FormControl, FormGroup, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {Modal} from "../../../components/Modal/Modal";
import React, {useEffect} from "react";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {fetchSignIn} from "../../../store/slices/User/UserSlice";
import {selectUserErrorMessage, selectUserIsLoading, selectUserStatus} from "../../../store/selectors/userSelector";
import {useSnackbar} from "notistack";
import {FormInput} from "../../../components/FormInput";

interface LoginModalProps {
    open: boolean
    handleCloseModal: () => void
}

const LoginFormSchema = yup.object({
    username: yup.string().required("Введите почту"),
    password: yup.string().min(6, "Минимальная длина пароля 6 символов").required(),
}).required();

export interface LoginFormModalProps {
    username: string
    password: string
}

export const LoginModal: React.FC<LoginModalProps> = ({open, handleCloseModal}): React.ReactElement => {
    const dispatch = useDispatch()
    const { control, handleSubmit, formState:{ errors } } = useForm<LoginFormModalProps>({
        resolver: yupResolver(LoginFormSchema)
    });

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const userIsLoading = useSelector(selectUserIsLoading)
    const onSubmit = async (data: LoginFormModalProps) => {
        try {
            dispatch(fetchSignIn(data))
        } catch (e) {
            enqueueSnackbar("Произошла ошибка, попробуйте снова", {variant: 'error'})
        }
    };

    return (
        <Modal setPadding={2} setWidth={'500px'} title='Войти' visible={open} handleClickClose={handleCloseModal}>
            <form onSubmit={handleSubmit(data => onSubmit(data))}>
                <FormControl component="fieldset" fullWidth>
                    <FormGroup aria-label="position" row>
                        <FormInput
                            helperText={errors.username?.message}
                            errors={!!errors.username}
                            label={'Введите почту или пароль'}
                            id={'username'}
                            control={control}
                            name={'username'}
                        />
                        <FormInput
                            helperText={errors.password?.message}
                            errors={!!errors.password}
                            label={'Пароль'}
                            type={'password'}
                            id={'password'}
                            control={control}
                            name={'password'}
                        />
                        <Button
                            type={'submit'}
                            disabled={userIsLoading}
                            style={{ borderRadius: 15, marginTop: 10 }}
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
    )
}