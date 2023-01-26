<template>
  <div class="container">
    <h1>Cart Page</h1>
    <div
      v-for="cartProd in cartProducts"
      :key="cartProd.merchantId"
      class="inner"
    >
      <div id="productss" style="display: flex">
        <div>
          <img :src="cartProd.product.imgSrc" />
        </div>
        <div id="innerr">
          <h4 style="text-align: center; padding-top: 4px">
            {{ cartProd.product.brand }} {{ cartProd.product.productName }}
          </h4>
          <br />
          <p>{{ cartProd.product.description }}</p>
          <p>Rs: {{ cartProd.price }}</p>
          <p>Quantity: {{ cartProd.quantity }}</p>
          <p>Merchant ID: {{ cartProd.merchantId }}</p>
          <button
            @click="
              DeleteFromCart(cartProd.product.productId, cartProd.merchantId)
            "
          >
            Delete
          </button>
        </div>
      </div>
      <!-- <div v-for="cartProd in cartProducts" :key="cartProd" class="inner">
      <div id="products">
        <center>
          <img :src="cartProd.product.imgSrc" />
          <h5 style="text-align: center; padding-top: 4px">
            {{ product.brand }} {{ product.productName }}
          </h5>
          <p>{{ product.description }}</p>
        </center>
      </div>
    </div>
    <h1>CART PAGE</h1> -->
    </div>
    <!-- {{ cartProducts }} -->
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
export default {
  computed: {
    ...mapGetters(["getItemsCartList", "getProductMerchants"]),
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
    }),
      this.$store.dispatch(
        "getProductMerchants",
        this.getItemsCartList.productId
      );
  },
  methods: {
    ...mapActions(["getItemsCartListApi", "getProductMerchantsApi"]),
    DeleteFromCart(productId, merchantId) {
      console.log("delete from cart", productId);
      axios
        .delete(
          `/api/cart/deleteOneCartItem/${this.$globalData.userMail}/${productId}/${merchantId}`
        )
        .then((response) => {
          this.$router.push("/delete");
          console.log(response);
        });
    },
  },
};
</script>
<style scoped>
.container {
  margin: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: bisque; */
}
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
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
}
#productss {
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.239);
  border-radius: 8px;
  height: 33vh;
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
body {
  width: 100vw;
}
</style>
