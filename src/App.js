import React from 'react';
// import { Route, Switch,  } from 'react-router';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import EditProfile from './components/Users/EditProfile/EditProfile';
import PostsPage from './components/PostsContainer';
import SubmitPostPage from './components/SubmitPostPage';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

// local imports
import theme from './components/ui/Theme';
import HomePage from './components/Users/Homepage/HomePage';
import Footer from './components/ui/Footer';
import Header from './components/ui/Header';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/user-home/*" element={<HomePage />}></Route>
          {/* Will eventually need this to be /profile/:id */}
          {/* <Route path="/profile" component={Profile}></Route> */}
          <Route path="/profile/edit" element={<EditProfile />}></Route>
          <Route path="/posts" element={<PostsPage />}></Route>
          <Route path="/submit" element={<SubmitPostPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
export default App;
