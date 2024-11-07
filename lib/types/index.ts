export type APIResponseType<T> = {
  message: string;
  response: T;
  status: boolean;
};

export type ProductType = {
  id: number;
  name: string;
  description: string;
  sku: string;
  stock: number;
  category_id: string;
  price: number;
  user_id: number;
  image: string;
  active: number;
  created_at: string;
  updated_at: string;
};

export type CategoryType = {
  id: number;
  name: string;
};

export type UserType = {
  id: number;
  name: string;
};
