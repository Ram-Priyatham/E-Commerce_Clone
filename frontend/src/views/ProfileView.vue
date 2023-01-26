<template>
  <div>
    <h1>My Profile</h1>
    <ul>
      <li>Name: {{ userDetails.firstName }}</li>
      <li>Email-ID: {{ userDetails.emailId }}</li>
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
      uid: this.$globalData.userMail,
    }),
      this.$store.dispatch("getOrderDetailsApi", {
        success: (res) => {
          this.orderDetails = res;
          console.log("ORDER DETAILS", res);
        },
        uid: this.$globalData.userMail,
      });
  },
  methods: {
    ...mapActions(["getProfileDetails", "getOrderDetailsApi"]),
  },
};
</script>
