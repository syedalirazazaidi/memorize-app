import React from "react";
import { useStyles } from "./styles";
function Post() {
  const classes = useStyles();
  return <h1 className={classes.border}>Post</h1>;
}

export default Post;
