import React from 'react'
import { useLoaderData } from "react-router-dom";

const ProductCard = (item) => {
    const data = useLoaderData();
  const productData = data.data;
  return (
    <div>
        <div>
            <h1>{productData.item.title}</h1>
        </div>
    </div>
  )
}

export default ProductCard
