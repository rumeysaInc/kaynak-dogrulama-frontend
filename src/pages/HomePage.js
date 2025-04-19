import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const HomePage = () => {
    const [username, setUsername] = useState("");
    const [today, setToday] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decoded = jwtDecode(token);
            setUsername(decoded.sub);
        }

        const date = new Date();
        const formatted = date.toLocaleDateString("tr-TR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        setToday(formatted);
    }, []);

    const features = [
        {
            title: "Hakkımızda",
            desc: "Bu platform, kullanıcıların bilimsel ve güvenilir kaynakları kolayca doğrulamasını sağlamak amacıyla geliştirildi.",
        },
        {
            title: "Nasıl Çalışır?",
            desc: "Kaynak gönder, sistemimiz yapay zekâ destekli olarak analiz etsin. Doğruluk skorları ve verilerle seni bilgilendirsin.",
        },
        {
            title: "Amacımız",
            desc: "Bilgi kirliliğini azaltmak, doğru ve güvenilir kaynakların yayılmasını teşvik etmek.",
        },
    ];

    return (
        <div className="min-h-[calc(100vh-64px)] w-full px-4 py-6 bg-gradient-to-tr from-indigo-100 via-white to-blue-100 flex flex-col items-center justify-center">
            <div className="bg-white shadow-2xl rounded-xl p-8 max-w-4xl w-full text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Hoş geldin, <span className="text-indigo-600">{username}</span> 👋
                </h1>
                <p className="text-gray-600 mb-4">Bugün: <strong>{today}</strong></p>
                <p className="text-gray-500 mb-8">
                    Platform hakkında aşağıdaki bilgileri inceleyebilirsin.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-md border border-gray-200
                 hover:shadow-2xl hover:border-indigo-300 hover:-translate-y-1
                 hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out"
                        >
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">{feature.title}</h3>
                            <p className="text-gray-700 text-sm">{feature.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default HomePage;
