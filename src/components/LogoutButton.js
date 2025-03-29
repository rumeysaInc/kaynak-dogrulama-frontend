// src/components/LogoutButton.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <Button
            label="Çıkış Yap"
            icon="pi pi-sign-out"
            className="p-button-danger"
            onClick={handleLogout}
        />
    );
};

export default LogoutButton;
