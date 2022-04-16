import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Dialog, DialogContent, DialogContentText, DialogTitle, FormControl, FormGroup, IconButton, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/PeopleOutline';
import MessageIcon from '@mui/icons-material/ChatBubbleOutline';
import CloseIcon from '@mui/icons-material/Close';

const Wrapper = styled('div')(
    ({ theme }) => `
        padding: 0;
    `
);

const BlueSide = styled('div')(
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

const LoginSide = styled('div')(
    ({ theme }) => `
        flex:0 0 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    `
)

const ContentBox = styled('div')(
    ({ theme }) => `
        display: flex;
        height: 100vh;

    `
)

const BlueSideList = styled('ul')(
    ({ theme }) => `
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: relative;
    `
)

const BlueSideListItem = styled('li')(
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
)

const LoginSideTitle = styled('h2')(
    ({ theme }) => `
        
    `
)

const LoginSideText = styled('span')(
    ({ theme }) => `

    `
)

const LoginContent = styled('div')(
    ({ theme }) => `
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 380px;
    `
)



function SignIn() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClickClose = () => {
        setOpen(false)
    }

  return (
    <Wrapper>
        <ContentBox>
        <BlueSide>
        <TwitterIcon color='primary' style={{position: 'absolute', left: '50%', top: '50%', 
                                     transform: 'translate(-50%, -50%)', width: '350%', height: '350%' }}
        />
            <BlueSideList>
                <BlueSideListItem><SearchIcon  style={{marginRight: 15}} fontSize='large'/>Читайте о том, что вам интересно.</BlueSideListItem>
                <BlueSideListItem><PeopleIcon  style={{marginRight: 15}} fontSize='large'/>Узнайте о чем говорят в мире.</BlueSideListItem>
                <BlueSideListItem><MessageIcon style={{marginRight: 15}}  fontSize='large'/>Просоединяйтесь к общению.</BlueSideListItem>
            </BlueSideList>
        </BlueSide>

        <LoginSide>
            <LoginContent>
                <TwitterIcon fontSize='large' color='primary'/>
                <Typography variant='h4' fontWeight={700} fontSize={32} mb={'45px'} mt={'15px'}>
                    Узнайте, что происходит в мире прямо сейчас
                </Typography>
                <Typography fontWeight={700}>Присоединяйтесь к Твиттеру прямо сейчас!</Typography>
                <Button style={{marginBottom: 20, borderRadius: 20,fontWeight: 700}} variant='contained' color='primary' fullWidth>
                    Зарегистрироваться
                </Button>
                <Button onClick={handleClickOpen} style={{borderRadius: 20, fontWeight: 700}} variant='outlined' color='primary' fullWidth>
                    Войти
                </Button>
            </LoginContent>

            <Dialog open={open}>
                <DialogTitle id='form-dialog-title'>
                    <IconButton onClick={handleClickClose} color='primary'>
                        <CloseIcon style={{fontSize: 26}} />
                    </IconButton>
                    Вход
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Для входа в аккаунт, пожалуйста, введите Вашу почту здесь.
                    </DialogContentText>
                    <FormControl component='fieldset' fullWidth>
                        <FormGroup aria-label='position' row>
                            <TextField 
                            autoFocus
                            margin='dense'
                            id='email'
                            label='Email Address'
                            type='email'
                            fullWidth
                            />
                        </FormGroup>
                    </FormControl>
                </DialogContent>
            </Dialog>
        </LoginSide>
        </ContentBox>
    </Wrapper>
  )
}

export default SignIn