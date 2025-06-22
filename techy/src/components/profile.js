import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile(){
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        async function fetchProfile() {
            const token = localStorage.getItem("token");
            try {
                const res = await axios.get("http://localhost:5000/profile", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUserData(res.data);
            } catch (error) {
                console.log("Unauthorized");
            }
        }
        fetchProfile();
    }, []);

    return <div>{userData ? <h1>Welcome {userData.user.username}</h1> : <p>Loading...</p>}</div>;
};

export default Profile;
