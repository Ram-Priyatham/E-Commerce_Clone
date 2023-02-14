<template>
  <div>
    <div>
      <br />
      <center>
        <h4>Your Products</h4>
        <div
          v-for="product in getProductsSold"
          :key="product.productId"
          class="inner"
        >
          <div id="productss" style="display: flex">
            <img :src="product.imgSrc" />
            <div id="innerr">
              <h5 style="text-align: center; padding-top: 4px">
                {{ product.brand }} {{ product.productName }}
              </h5>
              <br />
              <p>Product Id: {{ product.productId }}</p>
              <p>Your Selling Price: {{ product.price }}</p>
              <p>Stock Available: {{ product.productStock }}</p>
            </div>
          </div>
        </div>
      </center>
      <!-- {{ getProductsList }} -->
    </div>
    <!-- {{ getProductsSold }} -->
  </div>
</template>

<script>
// import axios from "axios";
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getProductsSold"]),
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getProductsSoldApi"]),
  },
  created: function () {
    this.$store.dispatch("getProductsSoldApi");
  },
};
</script>
<style scoped>
img {
  padding-top: 21px;
  height: 250px;
  width: 223px;
  border-radius: 10px;
  padding-left: 10px;
}
.inner {
  /* border: 8px solid white; */
  /* background-color: beige; */
  margin: 15px;
  height: auto;
  width: 45vw;
  border-radius: 8px;
}
#productss {
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.239);
  border-radius: 8px;
  height: 35vh;
  transition: 0.5s;
  width: 45vw;
}
#products:hover {
  transform: scale(1.08);
}
#innerr {
  margin-top: 5%;
  margin-left: 5%;
}
</style>
