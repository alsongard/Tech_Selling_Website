import React from 'react'
import Register from './register'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import LoginPage from './login';
import Header from './header';
import Footer from './footer';
import Contact from './contact';
import About from './about';
import ProductPage from './ProductsPage';
import Home from './home';
import ProductsInformation from './productsInformation';
import Profile from './profile';
import reducerer from "../store/reducer.js";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import requireAuth from "./requireAuth";
import setAuthHeader from "./utils/setAuthHeader"
const store = configureStore({reducer:reducerer});
const token = localStorage.getItem("token");


if (token)
{
  setAuthHeader(token);
  store.dispatch({type: "ON_LOGGED_IN"})
}
const ProtectedAbout = requireAuth(About);
const ProtectedProducts = requireAuth(ProductPage);
const ProtectedContact = requireAuth(Contact);
const ProtectedProfile = requireAuth(Profile)

function LandingPage() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div><Header /> <Outlet/> <Footer/></div>}>
            <Route index element={<Home />} />
            <Route path="about" element={<ProtectedAbout />} />
            <Route path="products" element={<ProtectedProducts />} />
            <Route path="contact" element={<ProtectedContact />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="/product/:id" element={<ProductsInformation/>} />
            <Route path="/profile" element={<ProtectedProfile/>}/>
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default LandingPage;