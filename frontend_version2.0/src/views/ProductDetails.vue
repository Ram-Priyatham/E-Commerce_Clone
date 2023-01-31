<template>
  <div class="MyFirstView">
    <div
      class="prduct-details"
      style="display: flex; flex-wrap: wrap; margin-left: 8%"
    >
      <div style="width: 35vw; padding: 20px; margin-top: 5%">
        <img
          :src="getProductDetail.imgSrc"
          style="height: 60vh; width: 100%; border-radius: 16px"
        />
      </div>
      <div
        class="details"
        style="padding-left: 40px; margin-top: 7%; width: 45%"
      >
        <br /><br />
        <h2 class="product-brand" style="text-align: left">
          {{ getProductDetail.brand }} {{ getProductDetail.productName }}
        </h2>
        <p class="product-short-des">
          Specifications: {{ getProductDetail.description }}
        </p>
        Rs:
        <span id="product-price">
          {{
            getProductMerchants[getProductMerchants.length - 1].productPrice
          }}</span
        >
        <br />
        Stock available:
        <p id="product-stock">
          {{ getProductMerchants[getProductMerchants.length - 1].productStock }}
        </p>
        <button class="btn btn-outline-secondary" @click="addToCart">
          Add to cart
        </button>
        <span style="visibility: hidden">jdhfv</span>
        <button
          class="btn btn-outline-success"
          @click="
            BuyNow(
              getProductDetail.productId,
              getProductMerchants[getProductMerchants.length - 1].merchantId
            )
          "
        >
          Buy Now
        </button>
        <p id="seller">Other Sellers:</p>
        <div v-for="merchant in getProductMerchants" :key="merchant.merchantId">
          <button
            class="btn btn-outline-primary"
            @click="
              ChangeMerchant(merchant.merchantId, getProductDetail.productId)
            "
          >
            {{ merchant.merchantName }}
          </button>
        </div>
        <!-- <ul>
          <li
            v-for="merchant in getProductMerchants"
            :key="merchant.merchantId"
          >
            Merchant ID:{{ merchant.merchantId }} sells at Rs:
            {{ merchant.productPrice }} has stock of
            {{ merchant.productStock }} items
          </li>
        </ul> -->
      </div>
    </div>
    <!-- {{ getProductMerchants }} -->
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
      mid: "",
      uid: "",
      pid: "",
      // userMail: localStorage.getItem("email"),
      merchantid:
        this.getProductMerchants[this.getProductMerchants.length - 1]
          .merchantId,
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
    ChangeMerchant(mid, pid) {
      console.log(mid, pid);
      // this.$route.params.productId = pid;
      axios.get(`/api/merchant/getPrice/${mid}/${pid}`).then((response) => {
        console.log(response),
          (document.getElementById("product-price").innerHTML = response.data);
      });
      axios.get(`/api/merchant/getstocks/${mid}/${pid}`).then((response) => {
        console.log(response),
          (document.getElementById("product-stock").innerHTML = response.data);
        this.merchantid = mid;
      });
    },
    addToCart() {
      console.log(this.getProductDetail.productId);
      console.log("Mail from Product Details is ", this.userMail);
      this.$store.dispatch("setCartListApi", {
        userId: localStorage.getItem("email"),
        merchantid: this.merchantid,
        id: this.getProductDetail.productId,
      });
      // if (this.getProductMerchants[0].productStock === 0) {
      //   alert("Stock is not available");
      // }
    },
    BuyNow(productid, merchantid) {
      console.log(productid, merchantid);
      const userId = encodeURIComponent(localStorage.getItem("email"));
      console.log(userId);
      axios
        .put(`/api/cart/directlyBuyNow/${productid}/${merchantid}/1/${userId}`)
        .then((response) => {
          this.$router.push("/checkout");
          console.log(response);
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
