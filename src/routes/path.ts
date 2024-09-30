const basepath = '/cmc';

const path = {
    login: basepath + "/login",
    home: basepath + "/",
    products: basepath + "/products",
    productDetail: basepath + "/products/:id",
    productCreate: basepath + "/product/create",
    management: basepath + "/product-management",
  } as const;
  export default path;