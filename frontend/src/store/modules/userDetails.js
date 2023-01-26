export default {
  state: {
    Details: [],
  },
  getters: {
    getDetails: (state) => state.Details,
  },
  mutations: {
    setDetails: (state, value) => (state.Details = value),
  },
  actions: {
    getProfileDetails: ({ commit }, { success, uid }) => {
      fetch(`api/users/getUserById/${uid}`)
        .then((resp) => resp.json())
        .then((res) => {
          commit("setDetails", res);
          success && success(res);
        });
    },
  },
};
