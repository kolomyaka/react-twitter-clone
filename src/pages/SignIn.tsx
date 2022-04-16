import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Input, Typography } from '@mui/material';
import Button from '@mui/material/Button'

const Wrapper = styled('div')(
    ({ theme }) => `
        display: flex;
        height: 100vh;
    `
);

const BlueSide = styled('div')(
    ({ theme }) => `
        background-color: #1DA1F2;
        min-width: 50%;
        padding: 25px;
    `
);

const LoginSide = styled('div')(
    ({ theme }) => `
        padding: 25px;
        min-width: 50%;
    `
)

const BlueSideList = styled('ul')(
    ({ theme }) => `
        
    `
)

const BlueSideListItem = styled('li')(
    ({ theme }) => `
        color: #fff;
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



function SignIn() {

  return (
    <Wrapper>

        <BlueSide>
            <BlueSideList>
                <BlueSideListItem>Читайте о том, что вам интересно.</BlueSideListItem>
                <BlueSideListItem>Узнайте о чем говорят в мире.</BlueSideListItem>
                <BlueSideListItem>Просоединяйтесь к общению.</BlueSideListItem>
            </BlueSideList>
        </BlueSide>

        <LoginSide>
            <TwitterIcon />
            <Typography>Узнайте, что происходит в мире прямо сейчас</Typography>
            <Typography>Присоединяйтесь к Твиттеру прямо сейчас!</Typography>
            <Button variant='contained' color='primary' fullWidth>Зарегистрироваться</Button>
            <Button variant='outlined' color='primary' fullWidth>Войти</Button>
        </LoginSide>
    </Wrapper>
  )
}

export default SignIn