import { Button, Table } from "antd";
import { ColumnType } from "antd/es/table";
// import {Table} from 'antd'
import { IProductData } from "../../../type/product";

interface IPropsProductsTable {
  onRedirectDetailPage: (id?: string) => void;
  productList: IProductData[];
  loading?: boolean;
  currentPage?: number;
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
  pageSize?: number;
  setPageSize?: React.Dispatch<React.SetStateAction<number>>;
}
const ProductsTable = ({
  onRedirectDetailPage,
  productList,
  loading,
  currentPage,
  setCurrentPage,
  pageSize,
  setPageSize,
}: IPropsProductsTable) => {
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
          <Button
            type="primary"
            onClick={() => onRedirectDetailPage?.(value?.id)}
          >
            Xem chi tiết
          </Button>
        );
      },
    },
  ];
  return (
    <Table
      rowKey="id"
      dataSource={productList}
      columns={columns}
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
      onRow={(record) => ({
        onDoubleClick: () => {
          onRedirectDetailPage?.(record.id ?? "");
        },
      })}
    />
  );
};

export default ProductsTable;
