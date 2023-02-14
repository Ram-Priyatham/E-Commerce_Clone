export default {
  state: {
    productsSold: [],
  },
  getters: {
    getProductsSold: (state) => state.productsSold,
  },
  mutations: {
    setProductsSold: (state, value) => {
      state.productsSold = value;
    },
  },
  actions: {
    getProductsSoldApi: ({ commit }) => {
      fetch("/api/merchant/allProductsSoldByMerchant/vamsi@gmail.com")
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          commit("setProductsSold", res);
          // success && success(res);
        });
    },
  },
};
