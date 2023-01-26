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
      this.$store.commit("CLEAR_USER_DATA");
      this.$globalData.notlogin = true;
      this.$router.push("/userlogin");
    },
  },
};
</script>
