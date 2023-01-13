import { IconButton, Paper, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import ArrowBackIcon from '@mui/icons-material/ArrowBackOutlined';
import styled from "styled-components";
import {HeaderTitleText} from "./HeaderTitleText";


const FlexWrapper = styled.div`
  display: flex;
  align-items: ${(props: FlexWrapperProps) => props.align};
  flex-direction: ${(props: FlexWrapperProps) => props.direction};
`;

type FlexWrapperProps = {
    direction?: string;
    align?: string;
};


export const HeaderTitle = () => {
    const location = useLocation();
    const navigate = useNavigate();


    return (
        <FlexWrapper align='center'>
            <div>
                {location.pathname.includes('/tweet') || location.pathname.includes('/user')
                    ? <IconButton onClick={() => navigate(-1)} style={{ marginLeft: '10px', paddingTop: '10px' }}><ArrowBackIcon style={{ color: '#000' }} /></IconButton>
                    : <></>
                }
            </div>
            <Paper
                square
                variant="outlined"
                sx={{
                    border: 'none',
                    padding: "10px 15px",
                    position: "sticky",
                    top: 0,
                    left: 0,
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: 700, borderRadius: 0 }}>
                    <HeaderTitleText pathname={location.pathname} />
                </Typography>
            </Paper>
        </FlexWrapper>
    );
};