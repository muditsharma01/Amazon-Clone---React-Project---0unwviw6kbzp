import React from "react";
import { useLoaderData } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/amazonSlice";


const Products = () => {

  const dispatch = useDispatch();


  const data = useLoaderData();
  const productData = data.data;
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-3 gap-8 z-10">
      {productData.map((item) => (
        <div
          className="bg-white h-auto border-[1px]
          border-gray-200 py-6 
          hover: border-transparent shadow-none hover: shadow-testShadow duration-200 relative py-8
          "
        >
          <span className="text-xs capital
             italic absolute top-2 right-2 text-gray-500">{item.category}</span>
          <div className="w-full h-auto flex items-center justify-center relative group">
            <img
              className="w-52 h-64 object-contain"
              src={item.image}
              alt="ProductImg"
            />
            
          </div>
          <div className="px-4  bg-white">
            <div className="flex items-center justify-between">
              <h2 className="mx-10">{item.title.substring(0, 20)}</h2>
              <br />
              <p
                className=" mx-3 text-sm text-gray-600 font-semibold"
              >
                ${item.price}
              </p>
            </div>
            <div>
              <p className="text-sm my-2">
                {item.description.substring(0, 110)}...
              </p>
              <div className="text-yellow-500">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <button
                onClick={()=>dispatch(addToCart({
                  id:item.id,
                  title:item.title,
                  description:item.description,
                  price:item.price,
                  category:item.category,
                  image:item.image,
                  quantity:item.quantity

                }))}
              
              
              
              className=" my-3 bg-yellow-400 text-white py-3 px-6 rounded-lg shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
    Add to cart
</button>
<button disabled
    className=" hover:cursor-not-allowed my-3 mx-3 bg-yellow-400 text-white py-3 px-6 rounded-lg shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
    See the product
</button>

              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
