import { Button, Form, Input, Spin, Typography } from "antd";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { openNotification } from "../../../../components/noti-custom";
import {
  fetchProductDetail,
  updateProduct,
} from "../../../../redux/action/product.action";
import { resetProductDetailAction } from "../../../../redux/reducer/product.reducer";
import path from "../../../../routes/path";
import { useAppDispatch, useAppSelector } from "../../../../stores/hooks";
import { IProductData } from "../../../../type/product";
import { WrapProductForm } from "../../../styled";

const ProductManagementEdit = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const param = useParams<string>();
  const { product, loading } = useAppSelector((state) => state.product);
  const { user } = useAppSelector((state) => state.auth);
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(fetchProductDetail(param.id ?? ""));
    return () => {
      dispatch(resetProductDetailAction());
    };
  }, []);

  useEffect(() => {
    if (product) {
      form.setFieldsValue({
        name: product.name,
        price: product.price,
        description: product.description,
      });
    }
  }, [product]);

  const onFinish = (value: IProductData) => {
    if (!param.id) return;
    dispatch(updateProduct({ id: param.id, payload: value })).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        openNotification("success", "Cập nhật thành công", 3, "topRight");
        navigate(path.management);
      }
    });
  };

  return user.role === "admin" ? (
    <WrapProductForm>
      <Typography.Title>Chỉnh sửa sản phẩm</Typography.Title>
      <Spin spinning={loading}>
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item name="name" label="Tên sản phẩm">
            <Input placeholder="Nhập tên sản phẩm" />
          </Form.Item>
          <Form.Item name="price" label="Giá sản phẩm">
            <Input placeholder="Nhập giá sản phẩm" />
          </Form.Item>
          <Form.Item name="description" label="Mô tả">
            <Input placeholder="Nhập mô tả" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary">
              Lưu
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </WrapProductForm>
  ) : (
    "Bạn không có quyền truy cập"
  );
};

export default ProductManagementEdit;
