import CategoryProducts from '@/components/CategoryProducts/_CategoryProducts';
import { ICategory, IProduct } from '@/types';
import axios from 'axios';
import React from 'react';

const CategoryPage = ({ products }: {
    products: IProduct[]
}) => {
    console.log({ products })
    return (
        <CategoryProducts products={products} />
    );
};

export default CategoryPage;


export const getStaticPaths = async () => {
    // if (typeof window === 'undefined') {
    //     return {
    //         paths: [],
    //         fallback: false
    //     }
    // }

    try {
        // get all categories from api server
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
        const categories = data.categories;
        const paths = categories.map((category: ICategory) => ({
            params: { categorySlug: category.id },
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

export const getStaticProps = async ({ params }: { params: { categorySlug: string } }) => {
    let products = [];
    // if (typeof window === 'undefined') {
    //     return {
    //         props: {
    //             products: []
    //         }
    //     }
    // }
    try {
        if (params.categorySlug) {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categoryProducts/${params.categorySlug}`);
            products = data;
        }
    } catch (error) {
        console.log(error);

    }

    return {
        props: {
            products
        }
    }
}