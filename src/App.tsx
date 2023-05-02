import { Component } from 'solid-js';
import HomePage from './pages';
import { Router, Route, Routes } from '@solidjs/router';
import Posts from './pages/posts';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/login';
import Register from './pages/register';
import { Toaster } from 'solid-toast';
import { AuthContextProvider } from './hooks/useAuth';

const App: Component = () => {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <Navbar/>
          <Toaster position='top-center'/>
          <Routes>
            <Route path="/" component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/posts" component={Posts} />
          </Routes>
        </AuthContextProvider>
      </Router>
    </>
  );
};

export default App;
