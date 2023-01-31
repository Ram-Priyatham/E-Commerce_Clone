<template>
  <div style="display: flex; justify-content: center; margin-top: 3vh">
    <form style="width: 40%">
      <br />
      <div class="form-group">
        <label>City</label>
        <input
          v-model="city"
          type="text"
          class="form-control"
          placeholder="Enter City Name"
          required
        />
      </div>
      <div class="form-group">
        <label>line1</label>
        <input
          v-model="line1"
          type="text"
          class="form-control"
          placeholder="Enter Line1"
          required
        />
      </div>
      <div class="form-group">
        <label>line2</label>
        <input
          v-model="line2"
          type="number"
          class="form-control"
          placeholder="Enter Line2"
          required
        />
      </div>
      <div class="form-group">
        <label>Pin Code</label>
        <input
          v-model="pinCode"
          type="number"
          class="form-control"
          placeholder="Enter Pin Code"
          required
        />
      </div>
      <div class="form-group">
        <label>State</label>
        <input
          v-model="state"
          type="text"
          class="form-control"
          placeholder="Enter State"
          required
        />
      </div>
      <button class="btn btn-primary" @click="CheckOut">Submit</button>
      <span style="visibility: hidden">uidk </span>
      <button type="reset" class="btn btn-secondary" @click="resetForm">
        Reset
      </button>
    </form>
    <div>
      <!-- <button @click="CheckOut">Checkout</button> -->
      <h1 v-if="boolValue">We are sending you the mail...please wait</h1>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      boolValue: false,
      city: "",
      line1: "",
      line2: "",
      state: "",
    };
  },
  methods: {
    CheckOut() {
      const requestbody = {
        city: this.city,
        line1: this.line1,
        line2: this.line2,
        state: this.state,
        userId: localStorage.getItem("email"),
      };
      axios.put("/api/cart/saveAddress", requestbody).then((response) => {
        this.$router.push("/");
        console.log(response);
      });
    },
  },
};
</script>
