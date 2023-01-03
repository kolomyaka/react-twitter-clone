import React, {useEffect, useState} from "react";
import {styled} from "@mui/material/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import {TextField, Typography,} from "@mui/material";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/PeopleOutline";
import MessageIcon from "@mui/icons-material/ChatBubbleOutline";
import {LoginModal} from "./components/LoginModal";
import {RegisterModal} from "./components/RegisterModal";
import {LoadingState} from "../../types";
import {useSelector} from "react-redux";
import {selectUserErrorMessage, selectUserStatus} from "../../store/selectors/userSelector";
import {useSnackbar} from "notistack";
import {useNavigate} from "react-router";

const Wrapper = styled("div")(
  ({ theme }) => `
        padding: 0;
    `
);

const BlueSide = styled("div")(
  ({ theme }) => `
        background-color: #71C9F8;
        flex:0 0 50%;
        display: flex;
        align-import: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    `
);

const LoginSide = styled("div")(
  ({ theme }) => `
        flex:0 0 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    `
);

const ContentBox = styled("div")(
  ({ theme }) => `
        display: flex;
        height: 100vh;

    `
);

const BlueSideList = styled("ul")(
  ({ theme }) => `
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: relative;
    `
);

const BlueSideListItem = styled("li")(
  ({ theme }) => `
        color: #fff;
        list-style: none;
        font-weight: 700;
        max-width: 380px;
        font-size: 20px;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    `
);


const LoginContent = styled("div")(
  ({ theme }) => `
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 380px;
    `
);

export const TextFieldEl = styled(TextField)(
  ({ theme }) => `
    margin-bottom: 10px;
    
  `
)

export const SignIn: React.FC = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const [visibleModal, setVisibleModal] = useState<'signIn' | 'signUp'>();  // Указываем, что можем принимать только строку, в зависимости от которой отображаем мод. окно
  const navigate = useNavigate()
  const handleClickOpenSignIn = (): void => {  // Функция для входа в аккаунт
    setVisibleModal('signIn');
  };

  const handleClickOpenSignUp = () => {  // Функция для регистрации
    setVisibleModal('signUp');
  };

  const handleCloseModal = (): void => {
    setVisibleModal(undefined)
  }

  const loadingStatus = useSelector(selectUserStatus);
  const errorMessage = useSelector(selectUserErrorMessage)

  useEffect(() => {
    switch (loadingStatus) {
        case LoadingState.SUCCESS:
            enqueueSnackbar('Успешная авторизация', {
                variant: 'success'
            })
            handleCloseModal()
            navigate('/home')
            break;
        case LoadingState.ERROR:
            enqueueSnackbar(errorMessage, {variant: 'error', preventDuplicate: true})
            break;
        case LoadingState.LOADED:
            enqueueSnackbar('На указанную почту было отправлено письмо для подтверждения аккаунта', {
                variant: 'success',
                autoHideDuration: 6000
            })
            handleCloseModal()
    }
  }, [loadingStatus, errorMessage])

  return (
    <Wrapper>
      <ContentBox>
        <BlueSide>
          <TwitterIcon
            color="primary"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "350%",
              height: "350%",
            }}
          />
          <BlueSideList>
            <BlueSideListItem>
              <SearchIcon style={{ marginRight: 15 }} fontSize="large" />
              Читайте о том, что вам интересно.
            </BlueSideListItem>
            <BlueSideListItem>
              <PeopleIcon style={{ marginRight: 15 }} fontSize="large" />
              Узнайте о чем говорят в мире.
            </BlueSideListItem>
            <BlueSideListItem>
              <MessageIcon style={{ marginRight: 15 }} fontSize="large" />
              Просоединяйтесь к общению.
            </BlueSideListItem>
          </BlueSideList>
        </BlueSide>

        <LoginSide>
          <LoginContent>
            <TwitterIcon fontSize="large" color="primary" />
            <Typography
              variant="h4"
              fontWeight={700}
              fontSize={32}
              mb={"35px"}
              mt={"15px"}
            >
              Узнайте, что происходит в мире прямо сейчас
            </Typography>
            <Typography fontWeight={700} mb={'25px'}>
              Присоединяйтесь к Твиттеру прямо сейчас!
            </Typography>
            <Button
              onClick={handleClickOpenSignUp}
              style={{ marginBottom: 20, borderRadius: 15, fontWeight: 700 }}
              variant="contained"
              color="primary"
              fullWidth
            >
              Зарегистрироваться
            </Button>
            <Button
              onClick={handleClickOpenSignIn}
              style={{ borderRadius: 15, fontWeight: 700 }}
              variant="outlined"
              color="primary"
              fullWidth
            >
              Войти
            </Button>
          </LoginContent>
            {
                visibleModal === 'signIn' && <LoginModal open={true} handleCloseModal={handleCloseModal} />
            }
            {
                visibleModal === 'signUp' && <RegisterModal open={true} handleCloseModal={handleCloseModal} />
            }
        </LoginSide>
      </ContentBox>
    </Wrapper>
  );
}

export default SignIn;
