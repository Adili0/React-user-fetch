import React from "react";
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Components/Users";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="login" element={<LandingPage />} />
        <Route path="/" element={<Home />} />
        <Route path="user" element={<Users/>}/>
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;
