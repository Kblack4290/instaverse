import React, { useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"
import { useDispatch } from 'react-redux'
import {getPosts} from './actions/posts.js'
import Instaverse from './images/Instaverse.png'
import Posts from './components/Posts/Posts.js'
import Form from './components/Form/Form.js'
import usestyles from './styles.js'


function App() {

  const classes = usestyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center" >Instaverse</Typography>
        <img className={classes.image} src={Instaverse} alt="instaverse" heigh="60" />

      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={4} >
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
