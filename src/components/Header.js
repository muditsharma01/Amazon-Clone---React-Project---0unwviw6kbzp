import React, {useState} from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import {logo} from "../assets/index"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { ArrowDropDownOutlined} from '@mui/icons-material';
import { allItems } from '../constants';
import HeaderBottom from './HeaderBottom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



function Header(props) {

  const [showAll, setshowAll] = useState(false);
  const products = useSelector((state) => state.amazon.products);


  return (
    <div className='w-full fixed z-50'>
        <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center'>
        {/* Image Start here */}
        <div className="headerHover">
           <Link to="/"> <img className='w-24 mt-2' src={logo} alt="logo" /></Link>
        </div>
        {/* Image End here */}
        {/* Deliver Start here */}
        <div className="headerHover">
           <LocationOnOutlinedIcon/>
            <p className='text-sm text-lightText font-light flex flex-col'>Deliver to 
            <span className='text-sm font-semibold -mt-1 text-whiteText'>India</span></p>
        </div>
        {/* Deliver End here */}
        {/* Search Start here */}
        <div className='h-10 rounded-md flex flex-grow relative'>
          <span onClick={()=>setshowAll(!showAll)} className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm
          text-amazon_blue font-titleFont flex items-center
          justify-center rounded-tl-md rounded-bl-md'>
          All <span></span><ArrowDropDownOutlined/></span>
          {
            showAll &&(
              <div>
                <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll
                overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2
                flex=col gap-1 z-50' >
                  {
                    allItems.map((item)=>(
                      <li className="text-sm tracking-wide font-titleFont border-b-[1px]
                      border-b-transparent  hover:border-amazon_blue
                        cursor-pointer duration-200" key={item.id}>{item.title}</li>
                    ))
                  }
                </ul>
                </div>
            )
          }
          <input placeholder='Search on Amazon' className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2 '  
          type="search" />
          <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow 
          hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md
          rounded-br-md'>
            <SearchOutlinedIcon/>
          </span>
        </div>
        {/* Search End here */}
        {/* Signin Start here */}
        <div className='flex flex-col items-start justify-center  headerHover'>
          <Link to="/signin"><p className='text-xs text-lightText font-light'>Hello, {props.title}</p></Link>
          <p className='text-sm font-semibold -mt-1 text-whiteText'> Accounts & Lists{" "} <span><ArrowDropDownOutlined/></span></p>
        </div>

        {/* Signin End here */}
        {/* Orders Start here */}

            <div className='flex flex-col items-start justify-center headerHover'>
              <p className='text-xs text-lightText font-light'>Returns</p>
              <p className='text-sm font-semibold -mt-1 text-whiteText'>& Orders</p>
            </div>
          
        {/* Orders End here */}
        {/* Cart Start here */}
          <Link to="/cart"><div className='flex  items-start justify-center headerHover relative'>
            <ShoppingCartIcon/>
            <p className='text-xs text-lightText mt-3'>Cart 
            <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847]
            
            text-amazon_blue rounded-full flex justify-center items-center ">{products.length >0?products.length:0}</span></p>
         
          </div></Link>
        {/* Cart End here */}
        
    </div>
    <HeaderBottom/>
    </div>
  )
}

export default Header
