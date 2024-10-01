const basepath = "/cmc";

const path = {
  login: basepath + "/login",
  home: basepath + "/",
  products: basepath + "/product",
  productDetail: basepath + "/product/:id",
  productCreate: basepath + "/product/create",
  management: basepath + "/product-management",
} as const;
export default path;
