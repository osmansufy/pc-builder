import { IProduct } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<
    | IProduct[]
    | {
        error: string;
      }
  >
) => {
  // read json file from json folder
  let products: IProduct[] = [];
  try {
    products = require("@/json/products.json");
    res.status(200).json(products);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export default handler;
