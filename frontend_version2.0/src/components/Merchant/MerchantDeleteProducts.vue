<template>
  <div style="display: flex; justify-content: center; margin-top: 3vh">
    <form style="width: 40%">
      <h3 style="text-align: center">Delete a product from the merchant</h3>
      <br />
      <div class="form-group">
        <label>Product Id</label>
        <input
          v-model="pid"
          type="text"
          class="form-control"
          placeholder="Enter product Id"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary" @click="submitForm">
        Submit
      </button>
      <span style="visibility: hidden">uidk </span>
      <button type="reset" class="btn btn-secondary" @click="resetForm">
        Reset
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      pid: "",
      merchantId: "",
    };
  },
  methods: {
    submitForm() {
      console.log(this.productId);
      axios.delete(`/api/merchant/deleteProduct/vamsi@gmail.com/${this.pid}`);
      alert("product Deleted");
    },
    resetForm() {
      this.productId = "";
      this.merchantId = "";
    },
  },
};
</script>
