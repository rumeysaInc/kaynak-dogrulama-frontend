import React, { useState, useRef } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import api from "../api/api";

const VerifySource = () => {
    const [sourceText, setSourceText] = useState("");
    const [resultText, setResultText] = useState("");
    const toast = useRef(null);
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileUpload = async () => {
        if (!file) {
            toast.current.show({
                severity: "warn",
                summary: "Hata",
                detail: "Lütfen bir dosya seçin.",
                life: 3000,
            });
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await api.post("/validate-citation/file", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            setResultText(response.data.message);
            toast.current.show({
                severity: "success",
                summary: "Başarılı",
                detail: "Dosya başarıyla işlendi.",
                life: 3000,
            });
        } catch (error) {
            setResultText("Dosya doğrulama başarısız.");
            toast.current.show({
                severity: "error",
                summary: "Hata",
                detail: "Dosya işlenirken bir hata oluştu.",
                life: 3000,
            });
        }
    };

    const handleVerify = async () => {
        if (!sourceText.trim()) {
            toast.current.show({
                severity: "warn",
                summary: "Hata",
                detail: "Lütfen kaynakça giriniz.",
                life: 3000,
            });
            return;
        }

        try {
            const response = await api.post("/validate-citation", {
                source: sourceText,
            });

            setResultText(response.data.message);
            toast.current.show({
                severity: "success",
                summary: "Başarılı",
                detail: "Kaynak doğrulandı.",
                life: 3000,
            });

        } catch (error) {
            setResultText("Doğrulama başarısız.");
            toast.current.show({
                severity: "error",
                summary: "Hata",
                detail: "İşlem sırasında bir hata oluştu.",
                life: 3000,
            });
        }
    };

    return (
        <div
            className="min-h-[calc(100vh-64px)] w-full px-4 py-6 flex justify-center"
            style={{ background: "linear-gradient(to right top, #1e1e2f, #2c2d3c, #3a3c4a, #494c57, #595d64)", color: "#fff" }}
        >
            <div className="w-full max-w-6xl">
                <Toast ref={toast} />

                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">Kaynak Doğrulama</h2>
                    <p className="text-white opacity-80">Kaynakçanızı girin ve sonucu sağda görüntüleyin.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* SOL KUTU */}
                    <div>
                        <label htmlFor="sourceText" className="font-semibold text-white text-lg block mb-2">
                            Kaynakça:
                        </label>
                        <InputTextarea
                            id="sourceText"
                            value={sourceText}
                            onChange={(e) => setSourceText(e.target.value)}
                            rows={16}
                            className="w-full p-3 border-1 border-gray-300 border-round-lg text-lg"
                            placeholder="Örnek: Smith, J. (2022). The Rise of AI..."
                            style={{ resize: "vertical", minHeight: "400px" }}
                        />

                        {/* Butonlar Yan Yana */}
                        <div className="flex flex-wrap gap-3 mt-4">
                            <Button
                                label="Kaynağı Doğrula"
                                icon="pi pi-check"
                                className="p-button-success p-button-lg flex-1"
                                onClick={handleVerify}
                            />
                            <Button
                                label="Dosyadan Kaynakları Doğrula"
                                icon="pi pi-upload"
                                className="p-button-warning p-button-lg flex-1"
                                onClick={handleFileUpload}
                            />
                        </div>

                        <input
                            type="file"
                            accept=".txt,.pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="text-white mt-2"
                        />
                    </div>

                    {/* SAĞ KUTU */}
                    <div>
                        <label className="font-semibold text-white text-lg block mb-2">
                            Doğrulama Sonucu:
                        </label>
                        <div
                            className="p-4 border-round-lg w-full"
                            style={{
                                minHeight: "400px",
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
        </div>

    );
};

export default VerifySource;
