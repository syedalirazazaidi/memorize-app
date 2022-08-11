import React from "react";
import Post from "./Post/post";
import { useSelector } from "react-redux";
import { useStyles } from "./styles";
import { CircularProgress, Grid } from "@mui/material";
function Posts({ setCurrentId }) {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const { memorys, isLoading, isError, message } = useSelector(
    (state) => state.memorys
  );
  const classes = useStyles();
  return !memorys.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {memorys.map((memory) => (
        <Grid key={memory._id} item xs={12} sm={6} md={6}>
          <Post post={memory} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
