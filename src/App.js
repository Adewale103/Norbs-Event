import "./App.css";
import Login from "./views/authentication/Login";
import Register from "./views/authentication/Register";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/dashboard/Dashboard";

const App = () => {
  return (
    <div className="App">
      <Routes>
      <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/dashboard/*" element= {<Dashboard/>}/>
      </Routes>
    </div>
  );
};

export default App;
