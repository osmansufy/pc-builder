import React from 'react';
import { FiMonitor } from 'react-icons/fi';
import { BsMotherboard } from 'react-icons/bs';
import { GiProcessor } from 'react-icons/gi';
import { MdSdStorage } from 'react-icons/md';
import { GrPowerShutdown, GrStorage } from 'react-icons/gr';
import { FaLaptopCode } from 'react-icons/fa';

import { IconContext } from "react-icons";
import { ICategory } from '@/types';
import Link from 'next/link';

const FeaturedCategories = ({
    categories
}: {
    categories: ICategory[]
}) => {
    const iconObj = {
        monitor: <FiMonitor />,
        motherboard: <BsMotherboard />,
        cpu_processor: <GiProcessor />,
        ram: <MdSdStorage />,
        power_supply_unit: <GrPowerShutdown />,
        storage_device: <GrStorage />,
        others: <FaLaptopCode />
    }



    return (
        <div className='my-10 '>
            <h2 className="text-3xl text-center font-semibold text-gray-800 dark:text-white mb-8">
                Featured Categories
            </h2>
            <div className="flex gap-8">
                {
                    Array.isArray(categories) && categories.map((category: ICategory) => (
                        <div className="shadow-md bg-slate-100 p-2 border w-40 flex items-center justify-center" key={category.id}>
                            <Link href={`/categories/${category.id}`} className="flex flex-col items-center justify-center" >
                                <IconContext.Provider value={{ size: "5em" }}>

                                    {iconObj[category.id as keyof typeof iconObj]}
                                </IconContext.Provider>
                                <h3 className="text-2xl text-center font-semibold text-gray-800 dark:text-white">
                                    {category.name}
                                </h3>
                            </Link>
                        </div>

                    ))
                }
            </div>

        </div>
    );
};

export default FeaturedCategories;