import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const Profile = () => {
    const [username, setUsername] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decoded = jwtDecode(token);
            setUsername(decoded.sub);
        }
    }, []);

    return (
        <div className="text-center mt-5">
            <h2>
                <span role="img" aria-label="kullanıcı ikonu">👤</span> Profil Bilgileri
            </h2>

            <p><strong>Kullanıcı adı:</strong> {username}</p>
        </div>
    );
};

export default Profile;
