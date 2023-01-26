<template>
  <div class="MyFirstView">
    <h1>Product DETAILS Page</h1>
    {{ getProductDetail }},
    <h1>Merchant Details</h1>
    {{ getProductMerchants }}
    <button>Add to cart</button>
    <button>Buy Now</button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
// import axios from "axios";
export default {
  name: "ProductDetails",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getProductDetail", "getProductMerchants"]),
  },
  created: function () {
    this.$store.dispatch("getProductDetailApi", this.$route.params.productId),
      this.$store.dispatch(
        "getProductMerchantsApi",
        this.$route.params.productId
      );
  },
  methods: {
    ...mapActions([
      "getProductDetailApi",
      "SET_CART_LIST",
      "getProductMerchantsApi",
    ]),
  },
};
</script>
