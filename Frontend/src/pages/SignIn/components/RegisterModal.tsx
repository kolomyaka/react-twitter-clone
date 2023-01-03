import {AlertColor, FormControl, FormGroup} from "@mui/material";
import Button from "@mui/material/Button";
import {Modal} from "../../../components/Modal/Modal";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "notistack";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import {FormInput} from "../../../components/FormInput";
import {fetchSignUp} from "../../../store/slices/User/UserSlice";
import {selectUserErrorMessage, selectUserStatus} from "../../../store/selectors/userSelector";

type RegisterModalProps = {
    open: boolean
    handleCloseModal: () => void
}

export interface RegisterFormModalProps {
    fullname: string
    username: string
    email: string
    password: string
    password2: string
}

const RegisterFormSchema = yup.object({
    fullname: yup.string().required('Введите имя'),
    username: yup.string().required('Введите логин'),
    email: yup.string().required("Введите почту"),
    password: yup.string().min(6, "Минимальная длина пароля 6 символов").required(),
    password2: yup.string().min(6, "Минимальная длина пароля 6 символов").required(),
}).required();

export const RegisterModal: React.FC<RegisterModalProps> = ({open, handleCloseModal}): React.ReactElement => {
    const dispatch = useDispatch()
    const { control, handleSubmit, formState:{ errors } } = useForm<RegisterFormModalProps>({
        resolver: yupResolver(RegisterFormSchema)
    });

    const loadingStatus = useSelector(selectUserStatus)
    // const errorMessage = useSelector(selectUserErrorMessage)

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const onSubmit = async (data: RegisterFormModalProps) => {
        try {
            dispatch(fetchSignUp(data))
        } catch (e) {
            enqueueSnackbar("Произошла ошибка, попробуйте снова", {variant: 'error'})
        }
    };

    return (
        <Modal setPadding={2} setWidth={'auto'} title='Создайте учетную запись' visible={open} handleClickClose={handleCloseModal}>
            <form onSubmit={handleSubmit(data => onSubmit(data))}>
                <FormControl component="fieldset" fullWidth>
                    <FormGroup aria-label="position" row>
                        <FormInput
                            helperText={''}
                            errors={false}
                            control={control}
                            label={'Имя'}
                            id={'fullname'}
                            name={'fullname'}
                        />
                        <FormInput
                            helperText={''}
                            errors={false}
                            control={control}
                            label={'Логин'}
                            id={'username'}
                            name={'username'}
                        />
                        <FormInput
                            helperText={''}
                            errors={false}
                            control={control}
                            label={'Электронная почта'}
                            id={'email'}
                            name={'email'}
                        />
                        <FormInput
                            helperText={errors.password?.message}
                            errors={!!errors.password}
                            control={control}
                            label={'Пароль'}
                            id={'password'}
                            name={'password'}
                            type={'password'}
                        />
                        <FormInput
                            helperText={errors.password2?.message}
                            errors={!!errors.password2}
                            control={control}
                            label={'Повторите пароль'}
                            id={'password2'}
                            name={'password2'}
                            type={'password'}
                        />
                        <Button
                            type={'submit'}
                            style={{ borderRadius: 15, marginTop: 10 }}
                            variant="contained"
                            fullWidth
                            color="primary"
                        >
                            Регистрация
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Modal>
    )
}