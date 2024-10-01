import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../../../redux/action/product.action";
import { useAppDispatch } from "../../../../stores/hooks";
import { WrapProductForm } from "../../../styled";
import { IProductData } from "../../../../type/product";

const ProductCreateFrom = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onFinish = (value: IProductData) => {
    console.log(value);
    const newValue = {
      ...value,
    };
    dispatch(addProduct(newValue));
    // navigate("/cmc/product/" + newValue.id);
  };
  return (
    <WrapProductForm>
      <Form title="Tạo mới sản phẩm" layout="vertical" onFinish={onFinish}>
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
  );
};

export default ProductCreateFrom;
