import React from 'react';
import ProductCard from '../Common/ProductCard';
import { IProduct } from '@/types';

const FeaturedProducts = ({
    products
}: {
    products: IProduct[]
}) => {
    return (
        <div className=''>
            <h2 className='text-2xl font-bold text-center mb-8'>Featured Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 it  lg:grid-cols-3 xl:grid-cols-4 gap-8 place-content-center">

                {
                    Array.isArray(products) && products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))

                }
            </div>

        </div>
    );
};

export default FeaturedProducts;