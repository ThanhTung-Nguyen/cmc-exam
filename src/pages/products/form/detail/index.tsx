import { Spin } from "antd";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetail } from "../../../../redux/action/product.action";
import { resetProductDetailAction } from "../../../../redux/reducer/product.reducer";
import { useAppDispatch, useAppSelector } from "../../../../stores/hooks";

const ProductDetail = () => {
  const dispatch = useAppDispatch();
  const param = useParams<string>();
  const { product } = useAppSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProductDetail(param?.id ?? ""));
    return () => {
      dispatch(resetProductDetailAction());
    };
  }, []);
  return !product ? (
    <Spin />
  ) : (
    <>
      <div>Thông tin chi tiết sản phẩm: {product.name ?? ""}</div>
      <div>Giá: {product?.price ?? ""}</div>
      <div>Mô tả: {product?.description ?? ""}</div>
    </>
  );
};

export default ProductDetail;
