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

const Register = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (user.username && user.email && user.password && user.confirmPassword) {
            if (user.password === user.confirmPassword) {
                console.log("User registered:", user);
            } else {
                alert("Şifreler uyuşmuyor!");
            }
        }
    };

    return (
        <div className="flex justify-content-center align-items-center min-h-screen" style={{ backgroundColor: "#1e1e2f" }}>
            <Card
                className="p-4 shadow-4 border-round-lg"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", width: "100%", maxWidth: "500px" }}
            >
                <h2 className="text-center text-2xl font-bold mb-2">Kayıt Ol</h2>
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
                            value={user.username}
                            onChange={handleInputChange}
                            className={classNames({ "p-invalid": submitted && !user.username })}
                        />
                        {submitted && !user.username && <small className="p-error">Kullanıcı adı gerekli</small>}
                    </div>

                    {/* E-posta */}
                    <div className="field mb-3">
                        <label htmlFor="email" className="block font-medium mb-1">
                            E-posta
                        </label>
                        <InputText
                            id="email"
                            name="email"
                            type="email"
                            value={user.email}
                            onChange={handleInputChange}
                            className={classNames({ "p-invalid": submitted && !user.email })}
                        />
                        {submitted && !user.email && <small className="p-error">E-posta gerekli</small>}
                    </div>

                    {/* Şifre */}
                    <div className="field mb-3">
                        <label htmlFor="password" className="block font-medium mb-1">
                            Şifre
                        </label>
                        <Password
                            id="password"
                            name="password"
                            value={user.password}
                            onChange={handleInputChange}
                            feedback={false}
                            toggleMask
                            className={classNames({ "p-invalid": submitted && !user.password })}
                        />
                        {submitted && !user.password && <small className="p-error">Şifre gerekli</small>}
                    </div>

                    {/* Şifre Onay */}
                    <div className="field mb-3">
                        <label htmlFor="confirmPassword" className="block font-medium mb-1">
                            Şifreyi Onayla
                        </label>
                        <Password
                            id="confirmPassword"
                            name="confirmPassword"
                            value={user.confirmPassword}
                            onChange={handleInputChange}
                            feedback={false}
                            toggleMask
                            className={classNames({ "p-invalid": submitted && !user.confirmPassword })}
                        />
                        {submitted && !user.confirmPassword && <small className="p-error">Şifre onayı gerekli</small>}
                    </div>

                    {/* Kayıt Butonu */}
                    <Button type="submit" label="Kayıt Ol" icon="pi pi-user-plus" className="w-full mt-3" />
                </form>

                <p className="text-center mt-3 text-sm">
                    Zaten hesabın var mı? <Link to="/login">Giriş Yap</Link>
                </p>
            </Card>
        </div>
    );
};

export default Register;
