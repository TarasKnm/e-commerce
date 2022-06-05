import React, {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import Navigation from "./components/Navigation";
import Register from "./pages/Register";
import Users from "./pages/Users";
import Profile from "./pages/Profile";

function App() {
    return (
        <div className="App">

            <Navigation/>
            <Router>
                <Routes>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/users" element={<Users/>}/>
                </Routes>

            </Router>

        </div>
    );
}

export default App;
