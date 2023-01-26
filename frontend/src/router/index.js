import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserLogIn from "../views/UserLogIn.vue";
import MerchantLogIn from "../views/MerchantLogIn.vue";
import UserRegistration from "../views/UserRegistration.vue";
import MerchantRegistration from "../views/MerchantRegistration.vue";
import ProductsList from "../views/ProductsList.vue";
import MerchantCRUD from "../components/Merchant/MerchantCRUD.vue";
import MerchantAddProducts from "../components/Merchant/MerchantAddProducts.vue";
import MerchantAddNewProduct from "../components/Merchant/MerchantAddNewProduct.vue";
import MerchantDeleteProducts from "../components/Merchant/MerchantDeleteProducts.vue";
import MerchantUpdateProducts from "../components/Merchant/MerchantUpdateProducts.vue";
import MerchantViewProducts from "../components/Merchant/MerchantViewProducts.vue";
import CartView from "../views/CartView.vue";
import ProfileView from "../views/ProfileView.vue";
import SignOut from "../components/SignOut.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "productsList",
    component: ProductsList,
  },
  {
    path: "/productDetails/:productId",
    name: "ProductsDisplay",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductDetails.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/userlogin",
    name: "login",
    component: UserLogIn,
  },
  {
    path: "/userregistration",
    name: "userregistration",
    component: UserRegistration,
  },
  {
    path: "/merchantlogin",
    name: "merchantlogin",
    component: MerchantLogIn,
  },
  {
    path: "/signout",
    name: "signout",
    component: SignOut,
  },
  {
    path: "/merchantregistration",
    name: "merchantregistration",
    component: MerchantRegistration,
  },
  {
    path: "/merchantcrud",
    name: "merchantcrud",
    component: MerchantCRUD,
    children: [
      {
        path: "addnewproduct",
        name: "addnewproduct",
        component: MerchantAddNewProduct,
      },
      {
        path: "addproduct",
        name: "addproduct",
        component: MerchantAddProducts,
      },
      {
        path: "deleteproduct",
        name: "deleteproduct",
        component: MerchantDeleteProducts,
      },
      {
        path: "updateproduct",
        name: "updateproduct",
        component: MerchantUpdateProducts,
      },
      {
        path: "viewproducts",
        name: "viewproducts",
        component: MerchantViewProducts,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
