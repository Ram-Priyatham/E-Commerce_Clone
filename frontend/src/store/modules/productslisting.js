export default {
  state: {
    productsList: [],
  },
  getters: {
    getProductsList: (state) => state.productsList,
  },
  mutations: {
    setProductsList: (state, value) => {
      state.productsList = value;
    },
  },
  actions: {
    getProductListApi: ({ commit }) => {
      fetch("/api/products/allProductsWithPrice")
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          commit("setProductsList", res);
          // success && success(res);
        });
    },
  },
};
