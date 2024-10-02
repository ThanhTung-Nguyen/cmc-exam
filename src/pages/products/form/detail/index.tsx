import { Col, Row, Spin } from "antd";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetail } from "../../../../redux/action/product.action";
import { resetProductDetailAction } from "../../../../redux/reducer/product.reducer";
import { useAppDispatch, useAppSelector } from "../../../../stores/hooks";
import { WrapProductForm } from "../../../styled";

const ProductDetail = () => {
  const dispatch = useAppDispatch();
  const param = useParams<string>();
  const { product, loading } = useAppSelector((state) => state.product);
  const colLeft = 5;
  useEffect(() => {
    dispatch(fetchProductDetail(param?.id ?? ""));
    return () => {
      dispatch(resetProductDetailAction());
    };
  }, []);
  return (
    <WrapProductForm>
      <Spin spinning={loading}>
        <Row gutter={[10, 20]}>
          <Col sm={24}>
            <Row>
              <Col span={colLeft}>Thông tin chi tiết sản phẩm:</Col>
              <Col>{product?.name ?? ""}</Col>
            </Row>
          </Col>
          <Col sm={24}>
            <Row>
              <Col span={colLeft}>Giá:</Col>
              <Col>{product?.price ?? ""} $</Col>
            </Row>
          </Col>
          <Col sm={24}>
            <Row>
              <Col span={colLeft}>Mô tả:</Col>
              <Col>{product?.description ?? ""}</Col>
            </Row>
          </Col>
        </Row>
      </Spin>
    </WrapProductForm>
  );
};

export default ProductDetail;
