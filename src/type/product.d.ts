export type IProductData = {
  id?: string;
  name?: string;
  price?: string;
  description?: string;
};

export type IProductReducer = {
  productList: IProductData[];
  product: IProductData | null;
  loading: boolean;
};
