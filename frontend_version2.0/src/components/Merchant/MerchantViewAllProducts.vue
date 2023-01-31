<template>
  <div>
    <br />
    <center><h4>All products in the market</h4></center>
    <div class="container">
      <div
        v-for="product in getProductsList"
        :key="product.productId"
        class="inner"
      >
        <div id="products">
          <center>
            <img :src="product.imgSrc" />
            <h5 style="text-align: center; padding-top: 4px">
              {{ product.brand }} {{ product.productName }}
            </h5>
            <p>Product Id: {{ product.productId }}</p>
          </center>
        </div>
      </div>

      <!-- {{ getProductsList }} -->
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getProductsList"]),
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getProductListApi"]),
  },
  created: function () {
    this.$store.dispatch("getProductListApi");
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  margin: 3px;
  justify-content: space-between;
  align-items: center;
  /* background-color: bisque; */
}
img {
  padding-top: 8px;
  height: 250px;
  width: 273px;
  border-radius: 10px;
}
.inner {
  /* border: 8px solid white; */
  /* background-color: beige; */
  margin: 15px;
  height: auto;
  width: 20vw;
  border-radius: 8px;
}
#products {
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.239);
  border-radius: 8px;
  height: 50vh;
  transition: 0.5s;
}
</style>
