import { CircularProgress, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { selectTagsItems, selectTagsLoadingStatus } from "../store/selectors/tagsSelector";

const RightSideBlock = styled('div')`
    background-color: #F5F8FA;
    border-radius: 20px;
    margin-top: 20px;
    
`
const RightSideContent = styled('div')`
    cursor: pointer;
    border-radius: 20px;

    div {
        &:hover {
            background-color: #E6ECF0;
            transition: all 300ms ease-in-out;
            
        }
    }
    a {
        color: inherit;
        text-decoration: none;
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

type Props = {
};

export const Tags: React.FC = ({}: Props) => {

    const tags = useSelector(selectTagsItems);
    const tagsLoadingStatus = useSelector(selectTagsLoadingStatus);

  return (
    <>
      <RightSideBlock>
        <Paper
          square
          variant="outlined"
          sx={{ backgroundColor: "#F5F8FA", border: "none", borderRadius: '20px' }}
        >
          <Typography
            variant="h6"
            sx={{ padding: "13px", fontWeight: "700", fontSize: "1" }}
          >
            Актуальные темы
          </Typography>
        </Paper>
        <RightSideContent>
          {tagsLoadingStatus === "LOADED" ? (
            tags.map((tag) => (
              <Paper
                key={tag.name}
                square
                variant="outlined"
                sx={{
                  backgroundColor: "#F5F8FA",
                  padding: "13px",
                  border: 'none'
                }}
              >
                <Link to={`/search?q=${tag.name}`}>
                <MainTheme>{tag.name}</MainTheme>
                <span style={{ color: "rgba(0,0,0,0.5)" }}>
                  Твитов: {tag.count}
                </span>
                </Link>
              </Paper>
            ))
          ) : (
            <CenterLoader>
              <CircularProgress />
            </CenterLoader>
          )}
        <Paper
          square
          variant="outlined"
          sx={{ backgroundColor: "#F5F8FA", border: "none", borderEndEndRadius: '20px', borderBottomLeftRadius: '20px' }}
        >
          <Typography
            variant="h6"
            sx={{ padding: "13px", fontWeight: "400", color: '#1976d2', fontSize: "15px" }}
          >
            Показать еще
          </Typography>
        </Paper>
        </RightSideContent>
      </RightSideBlock>
    </>
  );
};
