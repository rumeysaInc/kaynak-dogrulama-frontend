import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import { jwtDecode } from "jwt-decode";

const Layout = ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [username, setUsername] = useState("");

    useEffect(() => {
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUsername(decoded.sub);
            } catch (e) {
                console.error("Token çözümlenemedi:", e);
            }
        }
    }, [token]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    // SOL taraftaki ana menü
    const leftItems = [
        { label: "Ana Sayfa", icon: "pi pi-home", command: () => navigate("/home") },
        { label: "Kaynak Doğrula", icon: "pi pi-search", command: () => navigate("/verifySource") },
        { label: "Kaynak Bul", icon: "pi pi-send", command: () => navigate("/submitSource") },
    ];

    // SAĞ taraftaki kullanıcı işlemleri
    const rightItems = token
        ? [
            {
                label: username,
                icon: "pi pi-user",
                items: [
                    { label: "Profilim", icon: "pi pi-id-card", command: () => navigate("/profile") },
                    { separator: true },
                    { label: "Çıkış Yap", icon: "pi pi-sign-out", command: handleLogout },
                ],
            },
        ]
        : [
            { label: "Giriş Yap", icon: "pi pi-sign-in", command: () => navigate("/login") },
            { label: "Kayıt Ol", icon: "pi pi-user-plus", command: () => navigate("/register") },
        ];

    return (
        <div>
            <Menubar model={leftItems} end={<Menubar model={rightItems} />} />
            <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-tr from-indigo-100 via-white to-indigo-200">
                <div className="w-full max-w-screen-xl px-4">{children}</div>
            </main>
        </div>
    );
};

export default Layout;
