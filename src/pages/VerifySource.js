import React, { useState, useRef } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import axios from "axios";

const VerifySource = () => {
    const [sourceText, setSourceText] = useState("");
    const [resultText, setResultText] = useState("");
    const toast = useRef(null);

    const handleVerify = async () => {
        if (toast.current) {
            toast.current.show({
                severity: "warn",
                summary: "Hata",
                detail: "Lütfen kaynakça giriniz.",
                life: 3000,
            });
        }


        try {
            const response = await axios.post("http://localhost:8080/api/validate-citation", {
                source: sourceText,
            });

            setResultText(response.data.message);
            if (toast.current) {
                toast.current.show({
                    severity: "success",
                    summary: "Başarılı",
                    detail: "Kaynak doğrulandı.",
                    life: 3000,
                });
            }

        } catch (error) {
            setResultText("Doğrulama başarısız.");
            if (toast.current) {
                toast.current.show({
                    severity: "error",
                    summary: "Hata",
                    detail: "İşlem sırasında bir hata oluştu.",
                    life: 3000,
                });
            }
        }
    };

    return (
        <div
            className="min-h-screen px-4 py-6 flex flex-column justify-content-start align-items-center"
            style={{
                background: "linear-gradient(to right top, #1e1e2f, #2c2d3c, #3a3c4a, #494c57, #595d64)",
                color: "#fff",
            }}
        >
            <Toast ref={toast} />

            {/* Üst Başlık */}
            <div className="text-center mb-6" style={{ maxWidth: "1000px", width: "100%" }}>
                <h2 className="text-3xl font-bold text-white mb-2">Kaynak Doğrulama</h2>
                <p className="text-white opacity-80">Kaynakçanızı girin ve sonucu sağda görüntüleyin.</p>
            </div>

            {/* Grid Düzeni */}
            <div
                className="grid md:grid-cols-2 gap-6 justify-content-center w-full"
                style={{ maxWidth: "1200px" }}
            >
                {/* SOL: GİRİŞ */}
                <div>
                    <label htmlFor="sourceText" className=" block font-semibold text-white text-lg mb-2">
                        Kaynakça:
                    </label>
                    <InputTextarea
                        id="sourceText"
                        value={sourceText}
                        onChange={(e) => setSourceText(e.target.value)}
                        rows={16}
                        className="w-full p-3 border-1 border-gray-300 border-round-lg text-lg"
                        placeholder="Örnek: Smith, J. (2022). The Rise of AI. Journal of Future Tech, 5(2), 12-24."
                        style={{ minHeight: "450px" ,minWidth: "450px" }}
                    />
                    <div className="mt-4">
                        <Button
                            label="Kaynağı Doğrula"
                            icon="pi pi-check"
                            className="p-button-lg p-button-success px-6"
                            onClick={handleVerify}
                        />
                    </div>
                </div>

                {/* SAĞ: SONUÇ */}
                <div>
                    <label className="block font-semibold text-white text-lg mb-2">
                        Doğrulama Sonucu:
                    </label>
                    <div
                        className="p-4 border-round-lg"
                        style={{
                            minHeight: "320px",
                            backgroundColor: "rgba(255, 255, 255, 0.08)",
                            color: "#fff",
                            whiteSpace: "pre-line",
                            fontSize: "1rem",
                        }}
                    >
                        {resultText || "Doğrulama sonucu burada görüntülenecektir."}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifySource;
