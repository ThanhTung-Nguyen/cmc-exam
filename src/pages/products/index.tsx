import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProductList } from "../../redux/action/product.action";
import { resetProductListAction } from "../../redux/reducer/product.reducer";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import ProductsTable from "./components/table";

const ProductsPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { productList, loading } = useAppSelector((state) => state.product);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const onRedirectDetailPage = (id?: string) => {
    if (id !== "" && typeof id !== "undefined") {
      navigate("/cmc/product/" + id);
    }
  };

  useEffect(() => {
    dispatch(fetchProductList());
    return () => {
      dispatch(resetProductListAction());
    };
  }, []);
  return (
    <div>
      <ProductsTable
        loading={loading}
        productList={productList}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
        onRedirectDetailPage={onRedirectDetailPage}
      />
    </div>
  );
};

export default ProductsPage;
