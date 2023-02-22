import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  Route,
  ScrollRestoration
} from "react-router-dom";
import { productsData } from './api/api';
import Signin from './Components/Signin';
import Cart from './pages/Cart';
import FooterTop from './Components/Footer/FooterTop';
import ProductCard from './Components/Home/ProductCard';
import PaymentInput from './pages/PaymentInput';
import Register from './Components/Registration';

const Layout=()=>{
  return (
    <div>
      <Header title={"example"}/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements
    (
      <>
    <Route path="/" element={<Layout/>} >
      <Route index element={<><Home/> <FooterTop/></>} loader={productsData}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Route>
    <Route path="/signin" element={<Signin/>}></Route>
    <Route path="/payment" element={<PaymentInput/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
    

    </>
    ));
   
  return (
    <>
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router}>
        </RouterProvider>
    </div>
    
    </>
  );
}

export default App;
