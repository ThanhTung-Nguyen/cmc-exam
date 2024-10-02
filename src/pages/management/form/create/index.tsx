import { Button, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { openNotification } from "../../../../components/noti-custom";
import { addProduct } from "../../../../redux/action/product.action";
import path from "../../../../routes/path";
import { useAppDispatch, useAppSelector } from "../../../../stores/hooks";
import { IProductData } from "../../../../type/product";
import { WrapProductForm } from "../../../styled";

const ProductCreateFrom = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);

  const onFinish = (value: IProductData) => {
    dispatch(addProduct(value)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        openNotification("success", "Thêm mới thành công", 3, "topRight");
        navigate(path.management);
      }
    });
  };
  return user.role == "admin" ? (
    <WrapProductForm>
      <Typography.Title style={{ margin: 0 }}>
        Thêm mới sản phẩm
      </Typography.Title>
      <Form layout="vertical" onFinish={onFinish}>
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
            Tạo mới
          </Button>
        </Form.Item>
      </Form>
    </WrapProductForm>
  ) : (
    "Bạn không có quyền truy cập"
  );
};

export default ProductCreateFrom;
