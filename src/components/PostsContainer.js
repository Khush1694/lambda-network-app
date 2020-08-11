import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import theme from './ui/Theme';

// local imports
import Post from './Post';

const useStyles = makeStyles(theme => ({
  postsContainer: {
    padding: theme.spacing(1),
  },
}));

const PostsContainer = props => {
  const classes = useStyles();
  const posts = [1, 2, 3, 4, 5, 6];

  return (
    <Grid container direction="column" className={classes.postsContainer}>
      {posts.map((post, i) => {
        return (
          <Grid item>
            <Post key={i} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PostsContainer;
