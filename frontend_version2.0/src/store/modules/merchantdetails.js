export default {
  state: {
    productMerchants: [],
    productPrice: [],
  },
  getters: {
    getProductMerchants: (state) => state.productMerchants,
    getProductPrice: (state) => state.productPrice,
  },
  mutations: {
    setProductMerchants: (state, value) => {
      state.productMerchants = value;
    },
    setProductPrice: (state, value) => {
      state.productPrice = value;
    },
  },
  actions: {
    getProductMerchantsApi: ({ commit }, productId) => {
      fetch(
        "/api/merchant/getMerchantsDetailsForSameProductAlongWithName/" +
          productId
      )
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          commit("setProductMerchants", res);
        });
    },
    getProductPriceApi: ({ commit }, id) => {
      fetch("/api/merchant/getMerchantsDetailsForSameProduct" + id)
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          commit("setProductPrice", res);
        });
    },
  },
};
