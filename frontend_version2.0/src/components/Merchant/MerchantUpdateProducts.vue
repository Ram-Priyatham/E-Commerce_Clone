<template>
  <div style="display: flex; justify-content: center; margin-top: 3vh">
    <form style="width: 40%">
      <h3 style="text-align: center">Update the product details</h3>
      <br />
      <div class="form-group">
        <label>Product Id</label>
        <input
          v-model="productId"
          type="text"
          class="form-control"
          placeholder="Enter product name"
          required
        />
      </div>
      <div class="form-group">
        <label>Price</label>
        <input
          v-model="price"
          type="number"
          class="form-control"
          placeholder="Enter price"
          required
        />
      </div>
      <div class="form-group">
        <label>Quantity</label>
        <input
          v-model="quantity"
          type="number"
          class="form-control"
          placeholder="Enter quantity"
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
      productId: "",
      price: "",
      quantity: "",
    };
  },
  methods: {
    submitForm() {
      axios
        .put(
          `/api/merchant/updateStocks/merchant4@gmail.com/${this.productId}/${this.quantity}`
        )
        .then((response) => {
          console.log(response);
        });
    },
    resetForm() {
      this.productId = "";
      this.price = "";
      this.quantity = "";
    },
  },
};
</script>
