<template>
  <products-listing @product-selected="productSelected"
    >Our products</products-listing
  >
</template>

<script>
import ProductsListing from "@/components/ProductsListing.vue";
export default {
  components: { ProductsListing },
  name: "ProductsList",
  data() {
    return {};
  },
  methods: {
    productSelected(product) {
      console.log(product);
      this.$router.push(`/productDetails/${product.productId}`);
      // this.$router.push(`/productDetails/${productMerchants.productId}`);
    },
  },
};
</script>
