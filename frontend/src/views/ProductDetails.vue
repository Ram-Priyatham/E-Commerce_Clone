<template>
  <div class="MyFirstView">
    <div
      class="prduct-details"
      style="display: flex; flex-wrap: wrap; margin-left: 8%"
    >
      <div style="width: 35vw; padding: 20px">
        <img
          :src="getProductDetail.imgSrc"
          style="height: 70vh; width: 100%; border-radius: 16px"
        />
      </div>
      <div class="details" style="padding-left: 40px; margin-top: 7%">
        <br /><br />
        <h2 class="product-brand" style="text-align: left">
          {{ getProductDetail.brand }} {{ getProductDetail.productName }}
        </h2>
        <p class="product-short-des">
          Specifications: {{ getProductDetail.description }}
        </p>
        <span class="product-price"
          >Rs:
          {{
            getProductMerchants[getProductMerchants.length - 1].productPrice
          }}</span
        >
        <p class="product-stock">
          Stock available: {{ getProductMerchants[0].productStock }}
        </p>
        <button class="btn btn-outline-secondary" @click="addToCart">
          Add to cart
        </button>
        <span style="visibility: hidden">jdhfv</span>
        <button class="btn btn-outline-success" @click="CheckoutPage">
          Buy Now
        </button>
        <p id="seller">Other Sellers:</p>
        <ul>
          <li
            v-for="merchant in getProductMerchants"
            :key="merchant.merchantId"
          >
            Merchant ID:{{ merchant.merchantId }} sells at Rs:
            {{ merchant.productPrice }} has stock of
            {{ merchant.productStock }} items
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "ProductDetails",
  data() {
    return {
      index: 0,
    };
  },
  computed: {
    ...mapGetters(["getProductDetail", "getProductMerchants", "getCartList"]),
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
      "setCartListApi",
      "getProductMerchantsApi",
    ]),
    addToCart() {
      console.log(this.getProductDetail.productId);
      this.$store.dispatch("setCartListApi", {
        userId: this.$globalData.userMail,
        merchantid:
          this.getProductMerchants[this.getProductMerchants.length - 1]
            .merchantId,
        id: this.getProductDetail.productId,
      });
    },
    CheckoutPage() {
      axios
        .put(`/api/cart/orderNow/${this.$globalData.userMail}`)
        .then((response) => {
          this.$router.push("/checkout");
          console.log(response);
          console.log("hello");
        });
    },
  },
};
</script>
<style>
.product-details {
  width: 100%;
  padding: 60px 10vw;
  display: flex;
  /* justify-content: space-between; */
}
.details .product-brand {
  text-transform: capitalize;
  font-size: 30px;
  text-align: left;
}

.details .product-title {
  font-size: 25px;
  line-height: 30px;
  height: auto;
  margin: 15px 0 30px;
}

.details .product-short-des {
  font-size: 18px;
  line-height: 30px;
  height: auto;
  margin: 15px 0 30px;
}

.product-price {
  font-weight: 700;
  font-size: 20px;
}
.product-stock {
  font-size: 17px;
}
.buy-now {
  width: 48%;
  padding: 20px;
  border-radius: 5px;
  background: none;
  border: 1px solid #383838;
  color: #383838;
  font-size: 20px;
  cursor: pointer;
  margin: 20px 0;
  text-transform: capitalize;
}

.cart-btn {
  margin-right: 2%;
  background: #294738;
  color: #fff;
}
#seller {
  margin-top: 10%;
}
</style>
