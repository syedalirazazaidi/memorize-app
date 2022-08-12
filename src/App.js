import React, { useEffect, useState } from "react";
import "./App.css";
import { Container, Grid, Grow } from "@mui/material";
// import { AppBarr, Typographyy } from "./styles";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import { useDispatch } from "react-redux";
import { getPosts } from "./features/memorys/memorySlice";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);

  return (
    <Container maxWidth="lg">
      <Navbar />
      {/* <AppBarr position="static">
        <Typographyy variant="h2" align="center">
          Memories
        </Typographyy>
      </AppBarr> */}
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
