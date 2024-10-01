import { createAsyncThunk } from "@reduxjs/toolkit";
import {
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
      return res.data;
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
      return res.data;
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
