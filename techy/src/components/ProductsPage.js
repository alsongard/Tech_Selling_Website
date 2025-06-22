import React from 'react'
import {laptops} from "./lappy.js"
import ProductComponent from './products';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const myElements = laptops.map((item) => {
    return <ProductComponent key={item.id} item={item} />;
  });
  return (
    <div className='text-centers'>
      <h1 className="text-center mt-[20px]">Products Page</h1>
      <div className="flex flex-row justify-between flex-wrap gap-y-[20px] w-[90%] mx-auto ">
        {myElements}
      </div>
    </div>
  )
}
export default ProductPage;


//  WILL USE THIS FILE FOR PRODUCTS