import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifySource from "./pages/VerifySource";
import SubmitSource from "./pages/SubmitSource";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/verify-source" element={<VerifySource />} />
                    <Route path="/submit-source" element={<SubmitSource />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
