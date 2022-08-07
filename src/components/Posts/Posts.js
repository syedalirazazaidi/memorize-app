import React from "react";
import Post from "./Post/post";
import { useSelector } from "react-redux";
import { useStyles } from "./styles";
function Posts() {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  const { memorys, isLoading, isError, message } = useSelector(
    (state) => state.memorys
  );
  console.log(memorys, "--------");
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.root}>Posts</h1>
      <Post />
      <Post />
    </>
  );
}

export default Posts;
