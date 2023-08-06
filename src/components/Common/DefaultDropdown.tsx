"use client"

import { ICategory } from '@/types';
import axios from 'axios';
import { Dropdown } from 'flowbite-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function DefaultDropdown() {
    const [categories, setCategories] = useState<ICategory[]>([])
    const getCategories = async () => {
        try {
            const { data } = await axios.get('/api/categories');
            setCategories(data.categories);
        } catch (error) {
            console.log(error);

        }

    }

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <Dropdown label="Categories">
            {
                Array.isArray(categories) && categories.map((category: ICategory) => (
                    <Dropdown.Item as={Link} key={category.id} href={`/categories/${category.id}`}>
                        {category.name}
                    </Dropdown.Item>
                ))
            }

        </Dropdown>
    )
}


