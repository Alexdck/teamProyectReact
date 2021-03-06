import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import Login from "./containers/User/Login/Login";
import Register from "./containers/User/Register/Register";
import Film from "./containers/Film/Film";
import Rent from './containers/Rent/Rent';
import Profile from './containers/Profile/Profile';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rent/rent" element={<Rent />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/adduser" element={<Register />} />
          <Route path="/films" element={<Film />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
