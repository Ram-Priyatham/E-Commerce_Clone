import axios from "axios";

export default {
  state: {
    cartList: [],
  },
  getters: {
    getCartList: (state) => state.cartList,
  },
  mutations: {
    setCartList: (state, value) => (state.cartList = value),
  },
  actions: {
    setCartListApi: ({ commit }, { userId, merchantid, id }) => {
      console.log("User ID in cart details is first " + userId);
      // const response = axios.put(
      //   "/api/cart/addItemToCart/" + userId + "/1/" + id
      // );
      const response = axios.put(
        `/api/cart/addItemToCart/${userId}/${merchantid}/${id}`
      );
      console.log("from cart details", response);
      commit("setCartList", response);
    },
  },
};
