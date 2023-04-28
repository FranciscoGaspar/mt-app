import { Component } from 'solid-js';
import HomePage from './pages';
import { Router, Route, Routes } from '@solidjs/router';
import Posts from './pages/posts';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/login';
import Register from './pages/register';

const App: Component = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/posts" component={Posts} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
