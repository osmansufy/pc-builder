import Image from 'next/image'
import { Inter } from 'next/font/google'
import axios from 'axios'
import HomeBlock from '@/components/Home/_Home'
import { ICategory, IProduct } from '@/types'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ categories, products }: {
  categories: ICategory[],
  products: IProduct[]
}) {

  return (
    <HomeBlock categories={categories} products={products} />
  )
}


export const getStaticProps = async () => {
  let categories = [];
  let products = [];
  try {
    // get all categories from api server
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
    categories = data.categories;
  } catch (error) {
    console.log(error);

  }

  // get random 6 products from api server
  try {
    const { data: productsData } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    //  rendomize products array 6 items
    products = productsData.products.sort(() => Math.random() - Math.random()).slice(0, 6);
  } catch (error) {

  }

  return {
    props: {
      categories,
      products
    }
  }
}