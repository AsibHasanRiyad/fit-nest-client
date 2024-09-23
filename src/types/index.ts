export type TQueryParams = {
  name: string;
  value: boolean | React.Key;
};
export interface Product {
  _id: string;
  name: string;
  price: number;
  stockQuantity: number;
  description: string;
  image: string;
  category: string;
  __v: number;
}
export type TUser = {
  name: string;
  phone: string;
  address: string;
  email: string;
};

export type TOrderProduct = {
  productId: string;
  quantity: number;
};

export type TOrder = {
  name: string;
  user: TUser;
  products: TOrderProduct[];
  totalPrice: number;
};
