import React from "react";
import Post from "./Post/post";
import { useStyles } from "./styles";
function Posts() {
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
