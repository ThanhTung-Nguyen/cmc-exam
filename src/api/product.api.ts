import { PRODUCT_URL } from "../constants/api";
import { IProductData } from "../type/product";
import { axiosInstance } from "./request";

export const getProductList = () => {
  return axiosInstance.get(PRODUCT_URL);
};

export const getProductDetail = (id: string) => {
  return axiosInstance.get(PRODUCT_URL + "/" + id);
};

export const postProduct = (product: IProductData) => {
  return axiosInstance.post(PRODUCT_URL, product);
};

export const editProduct = (id: string, payload: IProductData) => {
  return axiosInstance.put(PRODUCT_URL + "/" + id, payload);
};

export const deleteProductById = (id: string) => {
  return axiosInstance.delete(PRODUCT_URL + "/" + id);
};
