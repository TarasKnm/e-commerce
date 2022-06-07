import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Navigation from "./components/Navigation";
import Register from "./pages/Register";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import History from "./pages/History";
import ProductForm from "./components/ProductForm";

function App() {
    return (
        <div className="App">

            <Navigation/>
            <Router>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/users" element={<Users/>}/>
                    <Route path="/home" element={<Home />} />
                    <Route path="/history" element={<History/>}/>
                    <Route path="/product/:id" element={<ProductForm />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
