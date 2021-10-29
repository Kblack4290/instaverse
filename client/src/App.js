import React from 'react'
import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"
import Instaverse from './images/Instaverse.png'
import Posts from './components/Posts/Posts.js'
import Form from './components/Form/Form.js'


function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center" >Instaverse</Typography>
        <img src={Instaverse} alt="instaverse" heigh="60" />

      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={4} >
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
