import React from "react";
import path from "./path";
import { TFormRouter } from "../type/form";
// import { TOKEN } from "../constants";
// import PrivateRoutes from "../components/private-route/private-route";
const Login = React.lazy(() => import("../pages/login"));
const MainLayout = React.lazy(() => import("../pages/layout"));
const ProductsList = React.lazy(() => import("../pages/products"));
const Management = React.lazy(() => import("../pages/management"));
const ProductDetail = React.lazy(() => import("../pages/products/form/detail"));
const ProductCreate = React.lazy(
  () => import("../pages/management/form/create")
);
const router: TFormRouter[] = [
  {
    path: path.login,
    element: Login,
  },
  {
    path: path.home,
    element: MainLayout,
    children: [
      {
        path: path.products,
        element: ProductsList,
      },
      {
        path: path.management,
        element: Management,
      },
      {
        path: path.productDetail,
        element: ProductDetail,
      },
      {
        path: path.productCreate,
        element: ProductCreate,
      },
    ],
  },
];
// const token = localStorage.getItem(TOKEN);
// if (token) {
//   router = router.slice(1);
// }

export default router;
