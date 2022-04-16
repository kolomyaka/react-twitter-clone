import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button'

const Wrapper = styled('div')(
    ({ theme }) => `
        padding: 0;
    `
);

const BlueSide = styled('div')(
    ({ theme }) => `
        background-color: #1DA1F2;
        flex:0 0 50%;
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

const LoginContent = styled('div')(
    ({ theme }) => `
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 380px;
    `
)





function SignIn() {

  return (
    <Wrapper>
        <ContentBox>
        <BlueSide>
            <BlueSideList>
                <BlueSideListItem>Читайте о том, что вам интересно.</BlueSideListItem>
                <BlueSideListItem>Узнайте о чем говорят в мире.</BlueSideListItem>
                <BlueSideListItem>Просоединяйтесь к общению.</BlueSideListItem>
            </BlueSideList>
        </BlueSide>

        <LoginSide>
            <LoginContent>
                <TwitterIcon fontSize='large' color='primary'/>
                <Typography variant='h4'>Узнайте, что происходит в мире прямо сейчас</Typography>
                <Typography>Присоединяйтесь к Твиттеру прямо сейчас!</Typography>
                <Button variant='contained' color='primary' fullWidth>Зарегистрироваться</Button>
                <Button variant='outlined' color='primary' fullWidth>Войти</Button>
            </LoginContent>
        </LoginSide>
        </ContentBox>
    </Wrapper>
  )
}

export default SignIn