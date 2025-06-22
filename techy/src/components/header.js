import { NavLink } from "react-router-dom";
import React from "react";
// import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import {connect} from "react-redux";

// import { IoIosSunny } from "react-icons/io";
function Header(props)
{
    return (
        <header className="flex flex-row justify-between items-center p-4 bg-gray-800 text-white">
            <div>
                <h1>TechGear</h1>
            </div>
            {
                !props.isLoggedInVar &&
                (
                    <ul className="flex flex-row pr-[20px] justify-between items-center w-[200px] ">
                        <li>
                            <NavLink 
                                to="/"
                                className={({isActive})=>{
                                    return isActive ? "text-white" : "text-black"
                                }}
                                >
                                    Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/login"
                                className={({isActive})=>{
                                    return isActive ? "text-white" : "text-black"
                                }}
                            >
                            Login
                            </NavLink>
                        </li>
                    </ul>
                )
            }

            {
                props.isLoggedInVar &&
                (
                    <ul>
                        <li>
                            <NavLink 
                            to="/about"
                            className={({isActive})=>{
                                return isActive ? "text-white" : "text-black"
                            }}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/products"
                                className={({isActive})=>{
                                    return isActive ? "text-white" : "text-black"
                                }}
                            >
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/contact"
                                className={({isActive})=>{
                                    return isActive ? "text-white" : "text-black"
                                }}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                )
            }
            {/* <li>
                <NavLink 
                    to="/register"
                    className={({isActive})=>{
                        return isActive ? "text-white" : "text-black"
                    }}
                >
                    Register
                </NavLink>
            </li> */}
            
        </header>

    )
}

const mapStateToProps = (state)=>{
    return {isLoggedInVar: state.isLoggedIn};
}
export default connect(mapStateToProps)(Header);