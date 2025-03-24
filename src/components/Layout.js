// src/components/Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

const Layout = () => {
    const items = [
        { label: "Ana Sayfa", icon: "pi pi-home", url: "/" },
        { label: "Hakkımızda", icon: "pi pi-info-circle", url: "/about" },
        { label: "İletişim", icon: "pi pi-envelope", url: "/contact" },
    ];

    const rightMenu = (
        <div className="flex align-items-center gap-3">
            <Link to="/login">
                <Button label="Giriş Yap" icon="pi pi-sign-in" className="p-button-text" />
            </Link>
            <Link to="/register">
                <Button label="Kayıt Ol" icon="pi pi-user-plus" className="p-button-outlined" />
            </Link>
        </div>
    );

    return (
        <>
            <Menubar model={items} end={rightMenu} className="custom-menubar" />
            <div className="p-4">
                <Outlet /> {/* Tüm sayfa içerikleri buraya yerleşir */}
            </div>
        </>
    );
};

export default Layout;
