import { IProduct } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IProduct | { error: string }>
) => {
  const { productSlug } = req.query;
  console.log({ productSlug });
  let product: IProduct | null = null;

  try {
    const products = require("@/json/products.json");
    product = products.products.find(
      (product: IProduct) => product.slug === productSlug
    );
    if (product) {
      res.status(200).json(product);
    }
    res.status(404).json({ error: "Product not found" });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export default handler;
