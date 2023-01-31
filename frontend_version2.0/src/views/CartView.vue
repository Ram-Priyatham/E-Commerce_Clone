<template>
  <div class="container">
    <p v-if="boolValue">Total: {{ total }}</p>
    <h1 v-if="!boolValue">
      Your Cart is Empty <br />
      please add some Products
    </h1>
    <button
      type="button"
      class="btn btn-outline-success"
      style="float: right"
      @click="CheckoutPage"
      v-if="boolValue"
    >
      Proceed
    </button>
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
          <!-- <button @click="addToCart">+</button> -->
          <p>Quantity: {{ cartProd.quantity }}</p>
          <!-- <button
            @click="
              DeleteFromCart(cartProd.product.productId, cartProd.merchantId)
            "
          >
            -
          </button> -->
          <p>Merchant Name: {{ cartProd.merchantName }}</p>
          <button
            type="button"
            class="btn btn-outline-danger"
            @click="
              DeleteFromCart(cartProd.product.productId, cartProd.merchantId)
            "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
    <!-- {{ cartProducts }} -->
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
export default {
  computed: {
    ...mapGetters([
      "getItemsCartList",
      "getProductMerchants",
      "getProductDetail",
    ]),
  },
  data() {
    return {
      cartProducts: [],
      imgSrc: "",
      total: 0,
      boolValue: true,
      userMail: localStorage.getItem("email"),
    };
  },
  created: function () {
    this.$store.dispatch("getItemsCartListApi", {
      success: (res) => {
        this.cartProducts = res;
        if (this.cartProducts.length === 0) {
          this.boolValue = false;
        }
        console.log("CARTPRODUCTS", res);
        this.cartProducts.forEach(
          (element) =>
            (this.total = this.total + element.price * element.quantity)
        );
      },
      id: this.userMail,
    }),
      this.$store.dispatch(
        "getProductMerchants",
        this.getItemsCartList.productId
      ),
      this.$store.dispatch("getProductDetail");
  },
  methods: {
    ...mapActions([
      "getItemsCartListApi",
      "getProductMerchantsApi",
      "getProductDetailApi",
    ]),
    DeleteFromCart(productId, merchantId) {
      console.log("delete from cart", productId);
      axios
        .delete(
          `/api/cart/deleteOneCartItem/${this.userMail}/${productId}/${merchantId}`
        )
        .then((response) => {
          this.$router.push("/delete");
          console.log(response);
        });
      alert("Deleted from Cart");
    },
    CheckoutPage() {
      this.$router.push("/final");
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
  height: 48vh;
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
