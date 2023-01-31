export default {
  state: {
    merchant: [],
  },
  getters: {
    getMerchantList: (state) => state.merchant,
  },
  mutations: {
    setMerchantList(state, value) {
      state.merchant = value;
    },
  },
  actions: {
    SET_MERCHANT_DETAILS: ({ commit }, user) => {
      commit("setMerchantList", user);
    },
  },
};
