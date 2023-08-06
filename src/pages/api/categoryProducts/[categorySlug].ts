import { IProduct } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { categorySlug } = req.query;

  console.log("categorySlug", categorySlug);

  try {
    // write json to a file and filter it by categorySlug
    const products = require("@/json/products.json");
    const filteredProducts = products.products.filter(
      (product: IProduct) => product.category === categorySlug
    );

    res.status(200).json(filteredProducts);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export default handler;
