<template>
  <div class="container">
    <div v-for="product in cartProducts" :key="product" class="inner">
      <h2>{{ product.price }}</h2>
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
