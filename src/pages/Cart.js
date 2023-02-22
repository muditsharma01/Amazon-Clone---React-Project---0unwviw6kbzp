import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {deleteItem, resetCart} from "../redux/amazonSlice";
import {emptyCart} from "../assets/index";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";





const Cart = () => {
    const dispatch = useDispatch();
    
  const products = useSelector((state) => state.amazon.products);
  const [totalPrice, setTotalPrice] = useState("");
  useEffect(()=>{
    let Total=0;
    products.map((item)=>{
        Total+=item.price;
        return setTotalPrice(Total.toFixed(2));
    })
},[products])

  return (
    
    <div>
        {
            products.length>0?(
                <div className="bg-white py-32">
                <div className="py-2">
                  <h2 className="mx-60 text-3xl font-medium float-left">Shopping Cart</h2>
                </div>
                <br />
                {/* Products start here */}
                <div>
                  {products.map((item) => (
                    <div
                      key={item.id}
                      className="w-3/5 border-b-[1px] border-b-gray-300 p-4
                               flex items-center gap-2"
                    >
                      <div className="w-1/5">
                        <img
                          className="w-full h-44 object-contain"
                          src={item.image}
                          alt=""
                        />
                      </div>
                      <div className="w-full mx-10 border-b-[1px] border-b-gray-300">
                        <h2>{item.title}</h2>
                        <br />
                        <h6 className="text-sm font-bodyFont">{item.description}</h6>
                        <h3 className="font-semibold">
                          Price: <span>${item.price}</span>
                        </h3>
                        <div>
                          <button onClick={()=>dispatch(deleteItem(item.id))}
                            className="float-left bg-red-500 w-56 py-1 rounded-lg
                                         text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300"
                          >
                            Delete From Cart
                          </button>
                        </div>
                      </div>
                      
                      </div>
                    
                    
                  ))}
                  <div onClick={()=>dispatch(resetCart())}
          
                   className="flex items-center">
                      <button className="bg-red-500 w-44 py-2 rounded-lg
                                         text-white mt-2 ml-2 hover:bg-red-700 active:bg-red-900 duration-300"
                      >Clear Cart</button>
                      </div>
                 
                  
                  <div className=" bg-white  h-52 flex items-center w-full mt-10">
                          <div className="mt-40">
                              <p
                              className="flex gap-2 items-start text-sm"
                              ><span><CheckCircleOutlineIcon className="bg-white text-green-500 rounded-full"/></span>{" "}Your order qualifies for FREE Shipping. Choose this option at checkout. See Details...</p>
                          </div>
                      </div>
                      <div className="flex items-center mb-4">
                          <span>${totalPrice}</span>
                      </div>
                      <div className="flex items-center">
                      <Link to="/payment"><button className="w-34 mb-10 bg-yellow-400 rounded-md py-1 px-10 font-semibold
                    cursor-pointer hover:bg-yellow-500 active:bg-yellow-600">Proceed to Pay</button></Link>
                      </div>
                  
                </div>
                
                
                
              </div>
            ):
            <motion.div 
            initial={{y:70, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{delay:0.5, duration:0.5}}
             
            className="bg-white flex justify-center items-center gap-4 py-36">
                <div>
                    <img className="w-80 rounded-lg p-4 mx-auto" src={emptyCart} alt="Empty Cart" />
                </div>
                <div className="w-96 p-4 bg-white flex flex-col items-center rounded-md shadow-lg">
                    <h1 className="font-titleFont text-xl font-bold">Your Cart Feels Lonely... </h1>
                    <p className="text-sm text-center">
                        {" "}
                    Damn, Its Empty.. Don't make it feel Lonely.. Fill it with books, electronics, etc. and make it happy</p>
                    <Link to="/"><button className="w-full bg-yellow-400 rounded-md py-2 px-8 font-semibold
          cursor-pointer hover:bg-yellow-500 active:bg-yellow-600">Continue Shopping</button></Link>
                </div>
            </motion.div>
        }
    </div>
    
            

  );
};

export default Cart;
