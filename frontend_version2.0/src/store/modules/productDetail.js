export default {
  state: {
    productDetail: [],
  },
  getters: {
    getProductDetail: (state) => state.productDetail,
  },
  mutations: {
    setProductDetail: (state, value) => {
      state.productDetail = value;
    },
  },
  actions: {
    getProductDetailApi: ({ commit }, productId) => {
      fetch("/api/products/findById/" + productId)
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          commit("setProductDetail", res);
        });
    },
  },
};
