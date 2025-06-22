import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register(){
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/register", formData);
            setMessage("Registration successful! Redirecting to login...");
            setTimeout(() => navigate("/login"), 2000); // Redirect to login after 2 seconds
        } catch (error) {
            setMessage("User already exists or registration failed.");
        }
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
                {message && <p className="text-center text-red-500">{message}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Username</label>
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="Enter username" 
                            onChange={handleChange} 
                            required 
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Enter password" 
                            onChange={handleChange} 
                            required 
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                        Register
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Already have an account? <a href="/login" className="text-blue-500">Login</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
