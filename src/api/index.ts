// export const URL = "http://localhost:4000";
export const URL = "https://ecommerce-server-ancw.onrender.com"

export const ADD_TO_CART = `${URL}/cart/add`;
export const TAKE_PROD_FR_CART = `${URL}/cart/user`;
export const REMOVE_PROD_IN_CART = `${URL}/cart`;

export const LOGIN = `${URL}/users/login`;
export const LOGOUT = `${URL}/users/logout`;
export const REGISTER = `${URL}/users/register`;
export const PROFILE = `${URL}/users/profile`;

export const GET_PRODUCT_LIST = `${URL}/products/list`;
export const GET_PRODUCT_FILTER = `${URL}/products/filter`;
export const DISPATCH_PRODUCT_ID = `${URL}/products`;

export const GET_CATEGORY_LIST = `${URL}/category`;

export const ADD_ORDER = `${URL}/orders/add`;
export const GET_ORDER_LIST = `${URL}/orders/user`;
