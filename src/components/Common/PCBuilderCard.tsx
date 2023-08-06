import { IProduct } from '@/types';
import Image from 'next/image';
import React from 'react';
import RatingContent from './RatingContent';
import { useAppDispatch } from '@/redux/hooks';
import { setProduct } from '@/redux/features/pcBuilderSlice';
import { useRouter } from 'next/router';

const PCBuilderCard = ({ product }: {
    product: IProduct
}) => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const handleAddToBuilder = () => {
        dispatch(setProduct({
            product,
            category: product.category
        }))
        router.push('/pc-builder')
    }
    return (
        <div
            className="flex flex-col w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row p-2 justify-between hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
            <div className="relative w-80 h-40">
                <Image src={product.image} alt={product.productName} layout='fill' objectFit='cover' />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {
                        product.productName
                    }
                </h5>
                {/* category */}
                <p className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                    {product.category}
                </p>
                {/* price */}
                <p className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                    ${product.price}
                </p>
                {/* rating */}
                <RatingContent rating={Math.floor(product.averageRating)} />

            </div>
            {/* add to pc builder button */}
            <div className="flex flex-col justify-center items-center p-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md" onClick={handleAddToBuilder}>
                    Add to PC Builder
                </button>

            </div>
        </div>

    );
};

export default PCBuilderCard;