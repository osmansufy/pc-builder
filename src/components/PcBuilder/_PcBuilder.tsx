import { PcBuilderState, removeProduct } from '@/redux/features/pcBuilderSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { slugToTitle } from '@/utility';
import { Button } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';

const PcBuilder = () => {
    const pc = useAppSelector((state) => state.pc)

    const dispatch = useAppDispatch()

    const handleRemoveProduct = (category: string) => {
        dispatch(removeProduct({ category }))
    }
    const [completeBtn, setCompleteBtn] = useState(false)

    // complete button will be enabled when 5 products are selected
    useEffect(() => {
        const choseProducts = Object.values(pc).filter((product) => product !== null)
        if (choseProducts.length >= 5) {
            setCompleteBtn(true)
        } else {
            setCompleteBtn(false)
        }
    }, [pc])


    return (
        <div className='container'>

            <div className="shadow-lg bg-white">
                <h2 className="text-2xl text-center font-semibold text-gray-800 dark:text-white px-4 py-2">
                    Build Your PC
                </h2>
                <div className="divide-y-2 flex flex-col gap-4">
                    {
                        Object.entries(pc).map(([key, value]) => (
                            <div key={key} className="  px-4 py-2">
                                {
                                    value ? (
                                        <div className="flex gap-3 justify-between items-center">
                                            <Image src={value.image} alt={value.productName} width={80} height={50} />

                                            <p className="text-gray-600 dark:text-gray-400">
                                                {value.productName}
                                            </p>
                                            {/* price */}
                                            <p className="text-gray-600 dark:text-gray-400">
                                                {value.price}
                                            </p>
                                            {/* close button */}
                                            <button className="bg-red-600 text-white px-4 py-2 rounded-md" onClick={() => handleRemoveProduct(value.category)}>
                                                Remove
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="flex gap-3 w-full justify-between items-center">
                                            <p className="text-gray-600 dark:text-gray-400">
                                                {slugToTitle(key)}
                                            </p>
                                            <Link className="text-blue-600 dark:text-blue-400" href={`/pc-builder/${key}`}>
                                                Chose Product
                                            </Link>
                                        </div>
                                    )
                                }
                            </div>
                        ))

                    }
                </div>

            </div>

            {/* complete button */}
            <div className="flex justify-center items-center mt-4">
                <Button disabled={!completeBtn} className="bg-blue-600 text-white px-4 py-2 rounded-md">
                    Complete Build
                </Button>
            </div>


        </div>
    );
};

export default PcBuilder;