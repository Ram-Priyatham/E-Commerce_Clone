<template>
  <div class="container">
    <div v-for="cartProd in cartProducts" :key="cartProd" class="inner">
      <div id="products" @click="selectProducts(product)">
        <center>
          <img :src="product.imgSrc" />
          <h5 style="text-align: center; padding-top: 4px">
            {{ product.brand }} {{ product.productName }}
          </h5>
          <p>{{ product.description }}</p>
        </center>
      </div>
    </div>
    <h1>CART PAGE</h1>
    {{ cartProducts }}
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getItemsCartList"]),
  },
  mounted() {
    // console.log(this.getItemsCartList);
  },
  data() {
    return {
      cartProducts: [],
    };
  },
  created: function () {
    this.$store.dispatch("getItemsCartListApi", {
      success: (res) => {
        this.cartProducts = res;
        console.log("CARTPRODUCTS", res);
      },
      id: this.$globalData.userMail,
    });
  },
  methods: {
    ...mapActions(["getItemsCartListApi"]),
  },
};
</script>
<style></style>
