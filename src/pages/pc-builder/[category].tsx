import SingleOption from '@/components/PcBuilder/SingleOption';
import { IProduct } from '@/types';
import axios from 'axios';
import React from 'react';

const PcBuilderOptionPage = ({ products }: {
    products: IProduct[]
}) => {
    console.log({ products })
    return (
        <SingleOption Products={products} />
    );
};

export default PcBuilderOptionPage;

export const getServerSideProps = async ({ params }: { params: { category: string } }) => {
    try {
        // fetch data from an API
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categoryProducts/${params.category}`);

        // return data as props
        return {
            props: {
                products: data
            }
        }
    } catch (error) {
        console.log(error)
        // error handling
        return {
            props: {
                products: []
            }
        }

    }
}



