//import axios from "axios";
export default {
  state: {
    ItemsCartList: [],
  },
  getters: {
    getItemsCartList: (state) => state.ItemscartList,
  },
  mutations: {
    setItemsCartList: (state, value) => (state.setItemCartList = value),
  },
  actions: {
    getItemsCartListApi: ({ commit }, { success }) => {
      fetch("/api/cart/showCart/vamsi")
        .then((resp) => resp.json())
        .then((res) => {
          commit("setItemsCartList", res);
          success && success(res);
        });
    },
  },
};
