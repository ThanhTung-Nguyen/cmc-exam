import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteProductById,
  editProduct,
  getProductDetail,
  getProductList,
  postProduct,
} from "../../api/product.api";
import { IProductData } from "../../type/product";

export const fetchProductList = createAsyncThunk(
  "product/fetchProductList",

  async (_, { rejectWithValue }) => {
    try {
      const res = await getProductList();
      return res.data as IProductData[];
    } catch (err) {
      return rejectWithValue(err || "Lỗi");
    }
  }
);

export const fetchProductDetail = createAsyncThunk(
  "product/fetchProductDetail",

  async (id: string, { rejectWithValue }) => {
    try {
      const res = await getProductDetail(id);
      return res.data as IProductData;
    } catch (err) {
      return rejectWithValue(err || "Lỗi");
    }
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (product: IProductData, { rejectWithValue }) => {
    try {
      const res = await postProduct(product);
      return res.data;
    } catch (err) {
      return rejectWithValue(err || "Lỗi");
    }
  }
);

export const updateProduct = createAsyncThunk<
  IProductData,
  { id: string; payload: IProductData }
>("product/updateProduct", async ({ id, payload }, { rejectWithValue }) => {
  try {
    const res = await editProduct(id, payload);
    return res.data;
  } catch (err) {
    return rejectWithValue(err || "Lỗi");
  }
});

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await deleteProductById(id);
      return res.data as IProductData;
    } catch (err) {
      return rejectWithValue(err || "Lỗi");
    }
  }
);
