'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const ProductScreen = ({product}) => {
  const router = useRouter();
  const {title, 
    description, 
    rating, 
    brand, 
    category, 
    discountPercentage,
    price,
    stock,
    images,
    thumbnail
  } = product;
  const [displayImage, setDisplayImage] = useState(thumbnail);
    return (
    <div className='h-screen w-screen grid grid-cols-5 grid-rows-4 '>
      <Image src={displayImage}
          alt='product image'
          width={200}
          height={200}
          className='my-5 p-2 lg:col-[1/3] lg:row-[1/4] col-[1/4] row-[1/3] h-full w-full lg:ml-0 ml-2'
          />
      <div className='m-5 bg-gray-200 lg:col-[3/6] lg:row-[2/4] col-[1/6] row-[3/5] grid grid-cols-3 grid-rows-4'>
        <div className='p-2 flex flex-col text-center col-[1/4] row-[1] justify-self-center w-full mt-5'>
          <p className='font-bold lg:text-6xl text-4xl'>{title}</p>
          <p className='mt-2'>{description}</p>
          <p className='mr-auto mt-5 ml-10 text-xl'>{rating}⭐</p>
        </div>
        <div className='p-2 justify-center col-[1] row-[4] w-fit h-fit self-center justify-self-center text-xl'>
          <p>Marca: {brand}</p>
          <p>Categoria: {category}</p>
        </div>
        <div className='p-2  col-[3] row-[3] w-fit h-fit self-center justify-self-center text-center'>
          <p className='text-5xl text-blue-400'>${price}</p>
          <p>Descuento: {discountPercentage}%</p>
          <p>Disponibles: {stock} piezas</p>
        </div>
        <button className='bg-blue-200 hover:bg-blue-300 rounded-md p-2 col-[3] row-[5] h-fit w-fit justify-self-end mr-5 mb-5'
          onClick={() => router.push('/')}
          >
          Volver
        </button>
      </div>
      <div className='mt-5 grid lg:grid-cols-3 grid-cols-2 lg:col-[1/3] lg:row-[4/5] col-[4/6] row-[1/3]'>
        {images.map((image, key) => <Image src={image}
          key={key}
          alt='product image'
          width={200}
          height={200}
          style={{width:100, height: 100}}
          className='p-2 justify-self-center hover:cursor-pointer'
          onClick={() => setDisplayImage(image)}
          />)}
      </div>
      
    </div>
  )
}

export default ProductScreen