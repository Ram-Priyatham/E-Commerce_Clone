export default {
  state: {
    orders: [],
  },
  getters: {
    getOrders: (state) => state.orders,
  },
  mutations: {
    setOrders: (state, value) => (state.orders = value),
  },
  actions: {
    getOrderDetailsApi: ({ commit }, { success, id }) => {
      fetch("api/cart/showOrderHistory/" + id)
        .then((resp) => resp)
        .then((res) => {
          commit("setDetails", res);
          success && success(res);
        });
    },
  },
};
