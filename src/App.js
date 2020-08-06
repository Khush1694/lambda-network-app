import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './components/Home';
import Profile from './components/Users/EditProfile/EditProfile';
import PostsPage from './components/PostsPage';
import SubmitPostPage from './components/SubmitPostPage';
import PostPage from './components/PostPage';
import { ThemeProvider } from '@material-ui/core/styles';

// local imports
import theme from './components/ui/Theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          {/* Will eventually need this to be /profile/:id */}
          <Route path="/profile" component={Profile}></Route>
          <Route path="/post/:id" component={PostPage}></Route>
          <Route path="/posts" component={PostsPage}></Route>
          <Route path="/submit" component={SubmitPostPage}></Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}
export default App;
