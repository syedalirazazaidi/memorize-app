import React, { useState, useEffect } from "react";
import { Button, Typography, paper, TextField } from "@mui/material";

import { useStyles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { createPosts, updatePost } from "../../features/memorys/memorySlice";
function Form({ currentId, setCurrentId }) {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
  });
  const dispatch = useDispatch();
  // const { memory } = useSelector((state) =>
  //   currentId ? state.memorys.find((m) => m._id === currentId) : null
  // );

  // useEffect(() => {
  //   if (memory) setPostData(memory);
  // }, [memory]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createPosts(postData));
    } else {
      dispatch(updatePost(currentId, postData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(0);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
    });
  };

  const classes = useStyles();
  return (
    <h1 className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing "${postData.title}"` : "Creating a Memory"}
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </h1>
  );
}

export default Form;
