import React, { useState } from "react";
import axios from "axios";
import setAuthHeader from "./utils/setAuthHeader";
import { useNavigate } from "react-router-dom";
import {connect} from "react-redux";

function Login(props) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ userName: "", userPassword: "" });

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        const res = await axios.post("http://localhost:5001/login", formData);
        try 
        {
            console.log(res);
            console.log(res.data);
            const  token = res.data.token;
            console.log(token);
            const exactToken = token.split(" ")[1];
            console.log(`This is exactToken : ${exactToken}`);
            localStorage.setItem("token", exactToken);
            setAuthHeader(exactToken);
            props.onLoggedIn()
            navigate("/Products");

        } catch (error) {
            alert("Login failed");
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <div className="mb-4">
                    <input 
                        type="text" 
                        name="userName" 
                        placeholder="Username" 
                        onChange={handleChange} 
                        required 
                        value={formData.userName}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                    />
                </div>
                <div className="mb-4">
                    <input 
                        type="password" 
                        name="userPassword" 
                        placeholder="Password" 
                        onChange={handleChange} 
                        value={formData.userPassword}
                        required 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch)=>{
    return {
        onLoggedIn: ()=>{return dispatch({
            type: 'ON_LOGGED_IN'
        })}
    }
}
export default connect(null,mapDispatchToProps ) (Login);
