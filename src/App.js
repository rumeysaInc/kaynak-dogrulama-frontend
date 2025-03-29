import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import SubmitSource from "./pages/SubmitSource";
import VerifySource from "./pages/VerifySource";
import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
// index.js veya App.js'in en üstünde
import './index.css';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Layout><HomePage /></Layout>} />
                {/* Layout içeren sayfalar */}
                <Route
                    path="/verifySource"
                    element={
                        <PrivateRoute>
                            <Layout><VerifySource /></Layout>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/submitSource"
                    element={
                        <PrivateRoute>
                            <Layout><SubmitSource /></Layout>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <Layout><Profile /></Layout>
                        </PrivateRoute>
                    }
                />

            </Routes>
        </Router>
    );
}

export default App;
