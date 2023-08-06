import React from 'react';
import FeaturedProducts from './FeaturedProducts';
import FeaturedCategories from './FeaturedCategories';
import { ICategory, IProduct } from '@/types';

const HomeBlock = ({
    categories,
    products
}: {
    categories: ICategory[],
    products: IProduct[]
}) => {
    return (
        <div className='container mx-auto '>
            <FeaturedProducts
                products={products}
            />
            <hr className="my-10" />
            <FeaturedCategories
                categories={categories}
            />
        </div>
    );
};

export default HomeBlock;