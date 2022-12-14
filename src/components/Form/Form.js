import React, { useState, useEffect } from "react";
import { Button, Typography, TextField, Paper } from "@mui/material";

import { useStyles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { createPosts, updatePost } from "../../features/memorys/memorySlice";
function Form({ currentId, setCurrentId }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const classes = useStyles();
  const memory = useSelector((state) =>
    currentId ? state.memorys.memorys.find((m) => m._id === currentId) : null
  );

  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (memory) setPostData(memory);
  }, [memory]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      // dispatch(createPosts(postData));
      dispatch(createPosts({ ...postData, name: user?.result?.name }));
    } else {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
      // dispatch(updatePost({ currentId, postData }));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(0);
    setPostData({
      title: "",
      message: "",
      tags: "",
    });
  };

  if (!user?.result?.name) {
    return (
      <Paper className="classes.paper">
        <Typography variant="h6" align="center">
          Please Sign In to create your memory and likes other's memory
        </Typography>
      </Paper>
    );
  }
  return (
    <h1 className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing ` : "Creating "} a memory
        </Typography>

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
