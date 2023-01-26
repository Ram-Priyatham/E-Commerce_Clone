<template>
  <div>
    <h1>My Profile</h1>
    <ul>
      <li>Name: {{ this.userDetails.firstName }}</li>
      <li>Email-ID: {{ this.userDetails.emailId }}</li>
    </ul>
    {{ getOrders }}
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getDetails", "getOrders"]),
  },
  data() {
    return {
      userDetails: [],
      orderDetails: [],
    };
  },
  created: function () {
    this.$store.dispatch("getProfileDetails", {
      success: (res) => {
        this.userDetails = res;
        console.log("USER DETAILS", res);
      },
    }),
      this.$store.dispatch("getOrders", {
        success: (res) => {
          this.orderDetails = res;
          console.log("ORDER DETAILS", res);
        },
        id: this.$globalData.userMail,
      });
  },
  methods: {
    ...mapActions(["getProfileDetails", "getOrderDetailsApi"]),
  },
};
</script>
