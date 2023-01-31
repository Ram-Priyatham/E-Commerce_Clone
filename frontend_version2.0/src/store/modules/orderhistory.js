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
    getOrderDetailsApi: ({ commit }, { success, uid }) => {
      fetch(`api/cart/showOrderHistory/${uid}`)
        .then((resp) => resp.json())
        .then((res) => {
          commit("setOrders", res);
          success && success(res);
        });
    },
  },
};
