import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";
import { Link } from "react-router-dom";

import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const Login = () => {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (credentials.username && credentials.password) {
            console.log("Login successful:", credentials);
        }
    };

    return (
        <div
            className="flex justify-content-center align-items-center min-h-screen"
            style={{ backgroundColor: "#1e1e2f" }} // Koyu arka plan
        >
            <Card
                className="p-4 shadow-4 border-round-lg"
                style={{ backgroundColor: "rgba(255,255,255,0.95)", width: "100%", maxWidth: "500px" }}
            >
                <h2 className="text-center text-2xl font-bold mb-2">Giriş Yap</h2>
                <Divider />

                <form onSubmit={handleSubmit} className="p-fluid">
                    {/* Kullanıcı Adı */}
                    <div className="field mb-3">
                        <label htmlFor="username" className="block font-medium mb-1">
                            Kullanıcı Adı
                        </label>
                        <InputText
                            id="username"
                            name="username"
                            value={credentials.username}
                            onChange={handleInputChange}
                            className={classNames({ "p-invalid": submitted && !credentials.username })}
                        />
                        {submitted && !credentials.username && (
                            <small className="p-error">Kullanıcı adı gerekli</small>
                        )}
                    </div>

                    {/* Şifre */}
                    <div className="field mb-3">
                        <label htmlFor="password" className="block font-medium mb-1">
                            Şifre
                        </label>
                        <Password
                            id="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleInputChange}
                            feedback={false}
                            toggleMask
                            className={classNames({ "p-invalid": submitted && !credentials.password })}
                        />
                        {submitted && !credentials.password && (
                            <small className="p-error">Şifre gerekli</small>
                        )}
                    </div>

                    {/* Giriş Butonu */}
                    <Button
                        type="submit"
                        label="Giriş Yap"
                        icon="pi pi-sign-in"
                        className="w-full mt-3"
                    />
                </form>

                <p className="text-center mt-3 text-sm">
                    Hesabınız yok mu? <Link to="/register">Kayıt Ol</Link>
                </p>
            </Card>
        </div>
    );
};

export default Login;
