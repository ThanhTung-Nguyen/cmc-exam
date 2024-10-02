import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import ProductManagementTable from "./components/table";
import { useEffect, useState } from "react";
import {
  deleteProduct,
  fetchProductList,
} from "../../redux/action/product.action";
import { resetProductListAction } from "../../redux/reducer/product.reducer";
import path from "../../routes/path";
import { openNotification } from "../../components/noti-custom";

const ManagementPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { productList, loading } = useAppSelector((state) => state.product);
  const { user } = useAppSelector((state) => state.auth);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  useEffect(() => {
    dispatch(fetchProductList());
    return () => {
      dispatch(resetProductListAction());
    };
  }, []);

  const onRedirectCreateForm = () => {
    navigate(path.productCreate);
  };
  const onRedirectUpdateForm = (id?: string) => {
    if (id !== "" && typeof id !== "undefined") {
      navigate("/cmc/product-management/edit/" + id);
    }
  };
  const handleDeleteProduct = (id: string) => {
    dispatch(deleteProduct(id)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        openNotification("success", "Thành công", 3, "topRight");
        dispatch(fetchProductList());
      }
    });
  };
  return user.role == "admin" ? (
    <div>
      <ProductManagementTable
        productList={productList}
        loading={loading}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
        onRedirectCreateForm={onRedirectCreateForm}
        onRedirectUpdateForm={onRedirectUpdateForm}
        handleDeleteProduct={handleDeleteProduct}
      />
    </div>
  ) : (
    "Bạn không có quyền truy cập"
  );
};

export default ManagementPage;
