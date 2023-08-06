// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ICategory } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    | ICategory[]
    | {
        error: string;
      }
  >
) {
  // read json file from json folder
  let categories: ICategory[] = [];
  try {
    categories = require("@/json/categories.json");
    res.status(200).json(categories);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error });
  }
}
