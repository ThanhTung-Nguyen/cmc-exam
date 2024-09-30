import { useNavigate } from "react-router-dom";
import ProductsTable from "./components/table"

const ProductsPage = () => {
  const navigate = useNavigate()
  const onRedirectDetailPage = (id?: string) => {
    if (id !== "" && typeof id !== "undefined") {
      navigate("/cmc/product/" + id);
    }
  };

  return (
    <div>
      <ProductsTable onRedirectDetailPage={onRedirectDetailPage}/>
    </div>
  )
}

export default ProductsPage