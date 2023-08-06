import { IProduct } from '@/types';
import React from 'react';
import PCBuilderCard from '../Common/PCBuilderCard';

const SingleOption = ({ Products }: {
    Products: IProduct[]
}) => {

    return (
        <div className='container'>
            <div className="grid grid-cols-1 gap-8">
                {
                    Array.isArray(Products) && Products.map((product) => (
                        <PCBuilderCard key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    );
};

export default SingleOption;