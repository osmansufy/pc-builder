import ProductDetails from '@/components/ProductDetails/_ProductDetails';
import { IProduct } from '@/types';
import axios from 'axios';
import React from 'react';

const ProductDetailsPage = ({ product }: {
    product: IProduct
}) => {
    return (
        <ProductDetails product={product} />
    );
};

export default ProductDetailsPage;


export const getStaticPaths = async () => {
    // if (typeof window === 'undefined') {
    //     return {
    //         paths: [],
    //         fallback: false
    //     }
    // }

    try {
        // get all categories from api server
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
        const products = data.products;
        const paths = products.map((product: IProduct) => ({
            params: { slug: product.slug },
        }))

        return {
            paths,
            fallback: false
        }
    } catch (error) {
        console.log(error);
        return {
            paths: [],
            fallback: false
        }

    }
}

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {

    // if (typeof window === 'undefined') {
    //     return {
    //         props: {
    //             product: null
    //         }
    //     }
    // }
    let product = null;
    try {
        if (params.slug) {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/${params.slug}`);
            product = data
        }
    } catch (error) {
        console.log(error);


    }

    return {
        props: {
            product
        }
    }
}