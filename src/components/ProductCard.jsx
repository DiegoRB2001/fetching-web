'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

const ProductCard = ({product}) => {
  const {thumbnail,title,id} = product;
  const router = useRouter();
  return (
    <div className='flex md:flex-row flex-col items-center gap-5 m-2 bg-gray-200'>
      <Image src={thumbnail}
      alt='product image'
      width={200}
      height={200}
      style={{width:200, height: 200}}
      className='p-2 md:mt-0 mt-5'
      />
      <div>{title}</div>
      <button 
      className='bg-blue-200 hover:bg-blue-300 rounded-md p-2 md:mb-0 mb-5'
      onClick={() => router.push(`/${id}`)}
      >
        Ver más
        </button>
    </div>
  )
}

export default ProductCard