<template>
  <div>
    <h1 style="margin-top: 2%; margin-left: 6%">My Profile</h1>
    <ul style="margin-left: 6%">
      <li>Name: {{ userDetails.firstName }}</li>
      <li>Email-ID: {{ userDetails.emailId }}</li>
    </ul>
    <br />
    <center>
      <h2>Order History</h2>
      <div
        v-for="cartProd in getOrders"
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
            <p>Merchant Name: {{ cartProd.merchantName }}</p>
          </div>
        </div>
      </div>
    </center>
    <!-- {{ getOrders }} -->
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getDetails", "getOrders"]),
  },
  data() {
    return {
      userDetails: [],
      orderDetails: [],
      userMail: localStorage.getItem("email"),
    };
  },
  created: function () {
    this.$store.dispatch("getProfileDetails", {
      success: (res) => {
        this.userDetails = res;
        console.log("USER DETAILS", res);
      },
      uid: this.userMail,
    }),
      this.$store.dispatch("getOrderDetailsApi", {
        success: (res) => {
          this.orderDetails = res;
          console.log("ORDER DETAILS", res);
        },
        uid: this.userMail,
      });
  },
  methods: {
    ...mapActions(["getProfileDetails", "getOrderDetailsApi"]),
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
  height: 37vh;
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
