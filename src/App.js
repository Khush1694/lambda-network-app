import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './components/Home';
import Profile from './components/Profile';
import PostsPage from './components/PostsPage';
import SubmitPostPage from './components/SubmitPostPage';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        {/* Will eventually need this to be /profile/:id */}
        <Route path="/profile" component={Profile}></Route>
        <Route path="/post/:id" component={Post}></Route>
        <Route path="/posts" component={PostsPage}></Route>
        <Route path="/submit" component={SubmitPostPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
