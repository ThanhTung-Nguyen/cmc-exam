import { IProductReducer } from "../../type/product";
import { createSlice } from "@reduxjs/toolkit";
import { fetchProductList, fetchProductDetail } from "../action/product.action";
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
        state.productList = action.payload;
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
      });
  },
});

export const { resetProductListAction, resetProductDetailAction } =
  productSlice.actions;

export default productSlice.reducer;
