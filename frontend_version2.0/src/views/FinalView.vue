<template>
  <div>
    <textarea
      name="shipping"
      id="shipping"
      cols="30"
      rows="10"
      placeholder="Enter your Address"
      required
    ></textarea>
    <br />
    <button class="btn btn-success" @click="CheckOut">Checkout</button>
    <h1 v-if="boolValue">We are sending you the mail...please wait</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userMail: localStorage.getItem("email"),
      boolValue: false,
    };
  },
  methods: {
    CheckOut() {
      console.log("from final view", this.userMail);
      this.boolValue = true;
      axios.put(`/api/cart/orderNow/${this.userMail}`).then((response) => {
        if (response.data === "not available stock") {
          this.router.push("/nostock");
        } else {
          this.$router.push("/checkout");
        }
        console.log(response);
      });
    },
  },
};
</script>

<style scoped></style>
