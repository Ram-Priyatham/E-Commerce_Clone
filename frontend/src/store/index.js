import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import productslisting from "./modules/productslisting";
import userDetails from "./modules/userDetails";
import userRegistration from "./modules/userRegistration";
export default new Vuex.Store({
  modules: { productslisting, userDetails, userRegistration },
});
