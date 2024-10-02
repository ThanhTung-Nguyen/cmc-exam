import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Button, Popconfirm, Space, Table } from "antd";
import { ColumnType } from "antd/es/table";
import { IProductData } from "../../../type/product";
interface IPropsTable {
  productList: IProductData[];
  loading: boolean;
  currentPage?: number;
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
  pageSize?: number;
  setPageSize?: React.Dispatch<React.SetStateAction<number>>;
  onRedirectCreateForm: () => void;
  onRedirectUpdateForm: (id?: string) => void;
  handleDeleteProduct: (id: string) => void;
}
const ProductManagementTable = ({
  productList,
  loading,
  currentPage,
  setCurrentPage,
  pageSize,
  setPageSize,
  onRedirectCreateForm,
  onRedirectUpdateForm,
  handleDeleteProduct,
}: IPropsTable) => {
  const columns: ColumnType<IProductData>[] = [
    {
      title: "STT",
      dataIndex: "",
      render: (_, record, index) =>
        currentPage && pageSize
          ? (currentPage - 1) * pageSize + index + 1
          : index,
      align: "center",
      width: 70,
    },

    {
      title: <div style={{ textAlign: "center" }}>Tên sản phẩm</div>,
      dataIndex: "name",
      width: 350,
    },
    {
      title: <div style={{ textAlign: "center" }}>Giá</div>,
      dataIndex: "price",
      align: "right",
      width: 100,
      render: (value) => {
        return <>{`${value} $`}</>;
      },
    },
    {
      title: <div style={{ textAlign: "center" }}>Mô tả</div>,
      dataIndex: "description",
    },
    {
      title: "Hành động",
      width: 150,
      align: "center",
      render: (value) => {
        return (
          <Space size={10}>
            <Button
              type="text"
              icon={<EditFilled />}
              onClick={() => onRedirectUpdateForm?.(value?.id)}
            />
            <Popconfirm
              title="Xóa sản phẩm"
              description="Bạn có chắc chắn muốn xóa sản phẩm này không?"
              onConfirm={() => handleDeleteProduct(value?.id)}
              // onCancel={cancel}
              okText="Đồng ý"
              cancelText="Hủy"
            >
              <Button type="primary" danger icon={<DeleteFilled />} />
            </Popconfirm>
          </Space>
        );
      },
    },
  ];
  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={productList}
      loading={loading}
      pagination={{
        pageSize: pageSize,
        pageSizeOptions: ["10", "20", "30", "50"],
        showSizeChanger: true,
        // onShowSizeChange: (current, size) => setPageSize?.(size),
        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}`,
        onChange: (page, size) => {
          setCurrentPage?.(page);
          setPageSize?.(size);
        },
      }}
      scroll={{ y: "70vh" }}
      title={() => <Button onClick={onRedirectCreateForm}>Thêm mới</Button>}
    />
  );
};

export default ProductManagementTable;
