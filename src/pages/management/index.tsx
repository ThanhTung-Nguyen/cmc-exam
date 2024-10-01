import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import ProductManagementTable from "./components/table";
import { useEffect, useState } from "react";
import { fetchProductList } from "../../redux/action/product.action";
import { resetProductListAction } from "../../redux/reducer/product.reducer";
import path from "../../routes/path";

const ManagementPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { productList, loading } = useAppSelector((state) => state.product);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  useEffect(() => {
    dispatch(fetchProductList());
    return () => {
      dispatch(resetProductListAction());
    };
  }, []);

  const onRedirectFormCreate = () => {
    navigate(path.productCreate);
  };
  return (
    <div>
      <ProductManagementTable
        productList={productList}
        loading={loading}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
        onRedirectFormCreate={onRedirectFormCreate}
      />
    </div>
  );
};

export default ManagementPage;
