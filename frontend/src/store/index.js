import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import productslisting from "./modules/productslisting";
import userDetails from "./modules/userDetails";
import userRegistration from "./modules/userRegistration";
import productDetail from "./modules/productDetail";
import merchantdetails from "./modules/merchantdetails";
export default new Vuex.Store({
  modules: {
    productslisting,
    userDetails,
    userRegistration,
    productDetail,
    merchantdetails,
  },
});
