import { IProduct } from '@/types';
import { slugToTitle } from '@/utility';
import { useRouter } from 'next/router';
import React from 'react';
import ProductCard from '../Common/ProductCard';

const CategoryProducts = ({ products }: {
    products: IProduct[]
}) => {
    const router = useRouter();
    const titleFromSlug = slugToTitle(router.query.categorySlug as string);
    return (
        <div className='container '>
            <h1 className="text-3xl text-center font-semibold text-gray-800 dark:text-white mb-8">
                Products in    {
                    titleFromSlug
                }
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 it  lg:grid-cols-3  gap-8 place-items-center">
                {
                    Array.isArray(products) && products.map((product: IProduct) => (
                        <ProductCard
                            product={product}
                            key={product.id}
                        />
                    ))
                }

            </div>


        </div>
    );
};

export default CategoryProducts;