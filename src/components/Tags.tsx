import { CircularProgress, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { selectTagsItems, selectTagsLoadingStatus } from "../store/selectors/tagsSelector";

const RightSideBlock = styled('div')`
    background-color: #F5F8FA;
    margin-top: 20px;
`
const RightSideContent = styled('div')`
    cursor: pointer;
    
    div {
        &:hover {
            background-color: #E6ECF0;
            
        }
    }
`
const MainTheme = styled('span')`
    font-weight: 700;
    display: block;
`
const CenterLoader = styled('div')`
    text-align: center;
    margin-top: 20px;
`

type Props = {};

export const Tags = (props: Props) => {

    const dispatch = useDispatch();
    const tags = useSelector(selectTagsItems);
    const tagsLoadingStatus = useSelector(selectTagsLoadingStatus);



  return (
    <>
      <RightSideBlock>
        <Paper
          square
          variant="outlined"
          sx={{ backgroundColor: "#F5F8FA", border: "none" }}
        >
          <Typography
            variant="h6"
            sx={{ padding: "5px 10px", fontWeight: "700", fontSize: "1" }}
          >
            Актуальные темы
          </Typography>
        </Paper>
        <RightSideContent>
          {tagsLoadingStatus === "LOADED" ? (
            tags.map((tag) => (
              <Paper
                square
                variant="outlined"
                sx={{
                  backgroundColor: "#F5F8FA",
                  padding: "5px 10px",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              >
                <MainTheme>{tag.name}</MainTheme>
                <span style={{ color: "rgba(0,0,0,0.5)" }}>
                  Твитов: {tag.count}
                </span>
              </Paper>
            ))
          ) : (
            <CenterLoader>
              <CircularProgress />
            </CenterLoader>
          )}
        </RightSideContent>
      </RightSideBlock>
    </>
  );
};
