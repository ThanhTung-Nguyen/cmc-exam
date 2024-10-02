import { IProductReducer } from "../../type/product";
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchProductList,
  fetchProductDetail,
  updateProduct,
  deleteProduct,
  addProduct,
} from "../action/product.action";
const initialState: IProductReducer = {
  productList: [],
  product: null,
  loading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetProductListAction: (state) => {
      state.productList = [];
    },
    resetProductDetailAction: (state) => {
      state.product = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.loading = false;
        state.productList = action.payload.reverse();
      })
      .addCase(fetchProductList.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchProductDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductDetail.rejected, (state) => {
        state.loading = false;
      })
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(addProduct.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(updateProduct.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(deleteProduct.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { resetProductListAction, resetProductDetailAction } =
  productSlice.actions;

export default productSlice.reducer;
