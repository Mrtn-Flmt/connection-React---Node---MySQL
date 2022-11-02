import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import Users from './pages/Users';
import Profile from './pages/Profile'
import Message from './pages/Message'
import Advertisements from './pages/Advertisements';
import DescriptionCard from './pages/DescriptionCard';
import AllMessage from './pages/AllMessage'
import MyCard from './pages/MyCard'

const App = () => {

  return (
    // systeme de navigation
    <BrowserRouter>
      <Routes>
        <Route path="/advertisements" element={<Advertisements />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/descriptioncard" element={<DescriptionCard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/message" element={<Message />} />
        <Route path="/allmessage" element={<AllMessage />} />
        <Route path="/mycard" element={<MyCard />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;