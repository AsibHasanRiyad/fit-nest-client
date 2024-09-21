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
