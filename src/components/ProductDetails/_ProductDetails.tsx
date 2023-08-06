import { IProduct } from '@/types';
import Image from 'next/image';
import React from 'react';
import RatingContent from '../Common/RatingContent';
import ProductInfoTab from './ProductInfoTab';

const ProductDetails = ({ product }: {
    product: IProduct
}) => {
    return (
        <div className='container '>

            <div className="grid  lg:grid-cols-2 grid-cols-1 gap-6">
                <div
                    className='bg-white  shadow-xl flex justify-center items-center p-4'
                >
                    <div className="relative w-full h-40 ">
                        <Image src={product?.image} alt={product?.productName} layout='fill' objectFit='cover' />
                    </div>
                </div>

                {/* category , stock, price */}

                <div className="flex flex-col px-2 py-4   gap-3  bg-white border shadow-xl ">
                    <h1 className="text-3xl text-center font-semibold text-gray-800 dark:text-white ">
                        {
                            product?.productName
                        }
                    </h1>
                    {/* review & rating */}
                    <div className="flex gap-3">

                        {product?.averageRating && <RatingContent rating={Math.floor(product?.averageRating)} />}
                        <p className='text-sm'>
                            {product?.reviews.length} Reviews
                        </p>
                    </div>
                    <div className="flex  gap-3">
                        <p className="text-gray-600 dark:text-gray-400 bg-slate-400 px-2">
                            Category: <span className="text-gray-900 dark:text-white font-semibold">{product?.category}</span>
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 bg-slate-400 px-2">
                            Stock: <span className="text-gray-900 dark:text-white font-semibold">{product?.status}</span>
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 bg-slate-400 px-2">
                            Price: <span className="text-gray-900 dark:text-white font-semibold">{product?.price}</span>
                        </p>

                    </div>
                    {/* Title */}

                    {/* key features */}
                    <div className="flex flex-col gap-3">
                        <h3
                            className='bg-blue-600 text-white p-1'>
                            Quick Overview
                        </h3>
                        {
                            product?.keyFeatures && Object.entries(product?.keyFeatures).map(([key, value]) => (
                                <p key={key} className="text-gray-600 dark:text-gray-400">
                                    {key}: <span className="text-gray-900 dark:text-white font-semibold">{value}</span>
                                </p>
                            ))

                        }
                    </div>
                </div>

            </div>
            <ProductInfoTab
                description={product?.description}
                reviews={product?.reviews}
            />
        </div>
    );
};

export default ProductDetails;