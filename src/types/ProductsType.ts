export interface IProduct {
  id: string;
  slug: string;
  image: string;
  productName: string;
  category: string;
  status: string;
  price: number;
  description: string;
  keyFeatures: KeyFeatures;
  individualRating: number;
  averageRating: number;
  reviews: IReview[];
}

export interface KeyFeatures {
  Brand: string;
  Model: string;
  Specification: string;
  Port: string;
  Type: string;
  Voltage: string;
}

export interface IReview {
  username: string;
  rating: number;
  comment: string;
}
