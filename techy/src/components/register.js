import React, { useState, useEffect } from "react";
import axios from "axios";
import setAuthHeader from "./utils/setAuthHeader";
import { useNavigate } from "react-router-dom";
import {connect} from "react-redux";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9_ -]{3,24}$/;
const PASSWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,32}$/;

function Register(props) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ 
        userFullName: "",
        userPassword: "", 
        confirmPassword:"", 
        userAddress: "", 
        userPhoneNumber: "", 
        userEmail:"" 
    });


    const [isTouched, setIsTouched] = useState({});
   
    // create variable = use onBlur var to test ?  true when user lose focus on element  if true test==set this: otherwise leave
    const userNameValid = isTouched.userFullName ? USER_REGEX.test(formData.userFullName) : "";
    const passwordMatch = isTouched.confirmPassword ? formData.userPassword === formData.confirmPassword : "";
    // create var = when isTouched has userPassword ? check regex_test() == true/return true : otherwise empty===undefined
    const passwordValid = isTouched.userPassword ? PASSWD_REGEX.test(formData.userPassword) : "";

    // based on the above values: userNameValid, passwordMatch and passwordValid and combine them with the isTouched to create
    // error messages

    const errMsg = {
        userNameErrMsg : !userNameValid && isTouched.userFullName ? "Username should start with letter and no special characters E.g *, / " : '',
        passwordErrMsg: !passwordValid && isTouched.userPassword ? "User password should minimum lenght of 8 and maximum length of 32" : "",
        passWordNotMatch: !passwordMatch && isTouched.confirmPassword ? "Passwords do not Match" : ''
    }

    function handleBlur(event)
    {
        const {name} = event.target;
        setIsTouched((prevValue)=>{
            return {
                ...prevValue,
                [name]: true
            }
        });
    }
    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);

        const res = await axios.post("http://localhost:5001/register", formData);
        try 
        {
            console.log(res);
            console.log(res.data);
            // const  token = res.data.token;
            // console.log(token);
            // const exactToken = token.split(" ")[1];
            // console.log(`This is exactToken : ${exactToken}`);
            // localStorage.setItem("token", exactToken);
            // setAuthHeader(exactToken);
            // props.onLoggedIn()
            // navigate("/Products");

        } catch (error) {
            alert("Login failed");
        }
    }
    return (
        <div className="flex min-h-screen dark:bg-slate-800 items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 dark:bg-slate-900 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <div className="mb-4">
                    <input type="text" onBlur={handleBlur} name="userFullName" placeholder="Username..." onChange={handleChange} required value={formData.userFullName} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                {
                    !userNameValid &&
                    (
                        <p className="text-red-600 pl-[5px] font-bold">{errMsg.userNameErrMsg}</p>
                    )
                }
                <div className="mb-4">
                    <input type="text" onBlur={handleBlur} name="userEmail" placeholder="Email..." onChange={handleChange} required value={formData.userEmail} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div className="mb-4">
                    <input type="text" onBlur={handleBlur} name="userAddress" placeholder="Address..." onChange={handleChange} required value={formData.userAddress} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div className="mb-4">
                    <input type="number" onBlur={handleBlur} name="userPhoneNumber" placeholder="Phone Number..." onChange={handleChange} required value={formData.userPhoneNumber} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div className="mb-4">
                    <input type="text" onBlur={handleBlur} name="userPassword" placeholder="Password.." onChange={handleChange} required value={formData.userPassword} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                {
                    !passwordValid &&
                    (
                        <p className="text-red-600 pl-[5px] font-bold">{errMsg.passwordErrMsg}</p>
                    )
                }
                <div className="mb-4">
                    <input type="text" onBlur={handleBlur} name="confirmPassword" placeholder="Repeat Password..." onChange={handleChange} required value={formData.confirmPassword} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                {
                    !passwordMatch &&
                    (
                        <p className="text-red-600 pl-[5px] font-bold">{errMsg.passWordNotMatch}</p>
                    )
                }
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300" > Register </button>
            </form>
        </div>
    );
};

// const mapDispatchToProps = (dispatch)=>{
//     return {
//         onLoggedIn: ()=>{return dispatch({
//             type: 'ON_LOGGED_IN'
//         })}
//     }
// }
// export default connect(null,mapDispatchToProps ) (Login);
export default Register;
