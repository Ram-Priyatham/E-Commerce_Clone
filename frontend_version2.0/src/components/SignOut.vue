<template>
  <button @click="signOut">Confirm Signout</button>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    signOut() {
      // this.$store.commit("CLEAR_USER_DATA");
      this.$globalData.userLogin = false;
      this.$globalData.userMail = "";
      // this.$router.push("/userlogin");
      localStorage.removeItem("email"), (window.location.href = "/userlogin");
    },
  },
};
</script>
