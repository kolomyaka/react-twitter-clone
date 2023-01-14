import React, {useEffect, useState} from "react";
import avaPlaceholder from "../../assets/ava-placeholder.png";
import {Avatar, Box, Button, IconButton, Link, Menu, MenuItem, Paper, Tab, Tabs, Typography} from "@mui/material";
import styled from "styled-components";
// @ts-ignore
import analyze from 'rgbaster'
import {FlexWrapper} from "../../components/StyledComponents/FlexWrapper";
import {UserData, UserFullName, UserUsername} from "../../components/UserInfo";
import {useSelector} from "react-redux";
import {selectUserData} from "../../store/selectors/userSelector";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import {UserTweets} from "./components/UserTweets";

type BackgroundAvatarProps = {
    backgroundColor: string | undefined
}

const BackgroundAvatar = styled('div')<BackgroundAvatarProps>`
  height: 200px;
  width: 100%;
  background: ${(props: BackgroundAvatarProps) => props.backgroundColor?props.backgroundColor:'rgba(0,0,0,.3)'};
  position: relative;
`

const UserProfileAvatar = styled('img')`
  position: absolute;
  left: 10px;
  bottom: -50%;
  transform: translate(0, -50%);
  border: 2px solid #fff;
  border-radius: 50%;
`

const UserProfileInfo = styled('div')`
  padding: 13px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const TabItem = styled(Tab)`
  text-transform: unset !important;
  //width: 25%;
`

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <>{children}</>
            )}
        </div>
    );
}

export const HeadUserProfile:React.FC = () => {

    const [backgroundColor, setBackgroundColor] = useState(undefined);
    const userData = useSelector(selectUserData);

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const analyzeUserAvatar = async () => {
        const result = await analyze(avaPlaceholder)
        setBackgroundColor(result[0].color)
    }

    useEffect(() => {
        analyzeUserAvatar()
    }, [])


    return (
        <>
            <Paper square sx={{ borderBottom: 'none', borderLeft: 'none', borderRight: 'none' }} variant='outlined'>
                <BackgroundAvatar backgroundColor={backgroundColor}>
                    <UserProfileAvatar width={100} height={100} src={avaPlaceholder}/>
                </BackgroundAvatar>
                <UserProfileInfo>
                    <FlexWrapper row={true} justifyContent={'flex-end'}>
                        <Button
                            variant="outlined"
                            color="primary"
                            sx={{ borderRadius: "20px", textTransform: 'unset' }}
                        >
                            <Typography>Изменить профиль</Typography>
                        </Button>
                    </FlexWrapper>
                    <UserData>
                        <UserFullName fontSize={'20px'}>{userData?.fullname}</UserFullName>
                        <UserUsername>@{userData?.username}</UserUsername>
                    </UserData>
                    <Typography>Frontend developer / UI designer / JavaScript / ReactJS / React Native</Typography>
                    <FlexWrapper alignItems={'flex-start'} justifyContent={'flex-start'} gap={'7px'}>
                        <FlexWrapper row={true} alignItems={'center'} gap={'10px'}>
                            <FlexWrapper row={true} gap={'5px'}>
                                <LocationOnOutlinedIcon color={'disabled'} />
                                <Typography sx={{color: 'rgb(158, 158, 158)'}}>
                                    Russia, Saint-Petersburg
                                </Typography>
                            </FlexWrapper>

                            <FlexWrapper row={true} gap={'5px'}>
                                <ShareOutlinedIcon color={'disabled'} />
                                <Link>
                                    kolomyaka.com
                                </Link>
                            </FlexWrapper>
                        </FlexWrapper>
                        <FlexWrapper row={true} alignItems={'center'} gap={'10px'}>
                            <FlexWrapper row={true} gap={'5px'}>
                                <CakeOutlinedIcon color={'disabled'} />
                                <Typography sx={{color: 'rgb(158, 158, 158)'}}>
                                    Дата рождения: 21 марта 2001 г.
                                </Typography>
                            </FlexWrapper>
                            <FlexWrapper row={true} gap={'5px'}>
                                <CalendarMonthOutlinedIcon color={'disabled'} />
                                <Typography sx={{color: 'rgb(158, 158, 158)'}}>
                                    Регистрация: январь 2023 г.
                                </Typography>
                            </FlexWrapper>
                        </FlexWrapper>
                    </FlexWrapper>
                    <FlexWrapper row={true} gap={'15px'}>
                        <Typography >
                            <span style={{fontWeight: 700}}>228</span> в читаемых
                        </Typography>
                        <Typography>
                            <span style={{fontWeight: 700}}>1488</span> читателей
                        </Typography>
                    </FlexWrapper>
                </UserProfileInfo>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs variant={'fullWidth'} value={value} onChange={handleChange} aria-label="basic tabs example">
                        <TabItem label="Твиты"  />
                        <TabItem label="Твиты и ответы" />
                        <TabItem label="Медиа" />
                        <TabItem label="Нравится" />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <UserTweets user={userData} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Item Four
                </TabPanel>
            </Paper >
        </>
    )
}