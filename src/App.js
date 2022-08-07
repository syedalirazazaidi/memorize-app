import React, { useEffect, useState } from "react";
import "./App.css";
import { Container, Grid, Grow } from "@mui/material";
import { AppBarr, Typographyy } from "./styles";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "./features/memorys/memorySlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBarr position="static">
        <Typographyy variant="h2" align="center">
          Memories
        </Typographyy>
      </AppBarr>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
