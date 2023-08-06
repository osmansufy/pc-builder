import { IProduct } from '@/types';
import React from 'react';
import RatingContent from './RatingContent';
import { slugToTitle } from '@/utility';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({
    product
}: {
    product: IProduct
}) => {
    const rating = Math.floor(product.averageRating);
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href={`/product/${product.slug}`}>
                <div className="relative w-full h-40">
                    <Image
                        src={product.image}
                        alt={product.productName}
                        fill
                        sizes='(max-width: 640px) 100vw, 640px'
                    />
                </div>
            </Link>
            <div className="px-5 pb-5">
                <Link href={`/product/${product.slug}`}>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {
                            product.productName
                        }
                    </h5>
                </Link>
                <div className="flex items-center mt-2.5 mb-5">
                    <RatingContent rating={rating} />
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        <Link href={`/categories/${product.category}`}>
                            {
                                slugToTitle(product.category as string)
                            }
                        </Link>
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        ${product.price}
                    </span>
                    <Link href={`/product/${product.slug}`}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;