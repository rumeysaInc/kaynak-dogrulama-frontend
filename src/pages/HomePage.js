import React from "react";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import "../HomePage.css"; // CSS dosyasını import ediyoruz

const HomePage = () => {
    return (
        <div
            className="flex flex-column justify-content-center align-items-center text-center min-h-screen"
            style={{
                backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,futuristic')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <h1 className="text-5xl font-bold text-white drop-shadow-md">Akıllı Kaynak Doğrulama Platformu</h1>
            <p className="text-xl text-gray-200 mt-4 max-w-2xl">
                Akademik ve bilimsel kaynaklarınızı kontrol edin, yeni kaynak önerileri alın. Ücretsiz ve hızlı.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="p-4 bg-white rounded shadow text-center">
                    <i className="pi pi-check-circle text-green-600 text-3xl"></i>
                    <h3 className="font-semibold mt-3">Kaynak Doğrulama</h3>
                    <p className="text-gray-600 text-sm">Girilen kaynakların güvenilirliğini analiz eder.</p>
                </div>
                <div className="p-4 bg-white rounded shadow text-center">
                    <i className="pi pi-lightbulb text-yellow-600 text-3xl"></i>
                    <h3 className="font-semibold mt-3">Yeni Kaynak Önerisi</h3>
                    <p className="text-gray-600 text-sm">Konuya özel kaynak önerileri al.</p>
                </div>
                <div className="p-4 bg-white rounded shadow text-center">
                    <i className="pi pi-lock text-blue-600 text-3xl"></i>
                    <h3 className="font-semibold mt-3">Gizlilik</h3>
                    <p className="text-gray-600 text-sm">Verilerin gizli kalır, sistem dışa aktarmaz.</p>
                </div>
            </div>

            <div className="flex gap-4">
                <Link to="/verify-source">
                    <Button label="Kaynağım Doğru Mu?" icon="pi pi-check" className="p-button-lg p-button-secondary" />
                </Link>
                <Link to="/submit-source">
                    <Button label="Kaynak Sunabilir Misin?" icon="pi pi-search" className="p-button-lg p-button-outlined" />
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
