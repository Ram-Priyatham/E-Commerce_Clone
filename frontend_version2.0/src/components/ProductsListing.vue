<template>
  <div>
    <br />
    <center>
      <div
        class="form-inline my-2 my-lg-0"
        style="display: flex; justify-content: center"
      >
        <input
          v-model="searchtext"
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          class="btn btn-outline-success"
          type="button"
          @click="searchfunction"
        >
          Search
        </button>
      </div>
      <br />
    </center>
    <div class="container">
      <div
        v-for="product in productsList"
        :key="product.productId"
        class="inner"
      >
        <div id="products" @click="selectProducts(product)">
          <center>
            <img :src="product.imgSrc" />
            <h5 style="text-align: center; padding-top: 4px">
              {{ product.brand }} {{ product.productName }}
            </h5>
            <p>{{ product.description }}</p>
            <p>Rs: {{ product.productPrice }}</p>
          </center>
          <!-- <p>{{ merchant.productPrice }}</p> -->
          <!-- {{ getProductsList }} -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "ProductsListing",
  emits: ["product-selected"],
  computed: {
    ...mapGetters(["getProductsList", "getProductPrice"]),
  },
  methods: {
    ...mapActions(["getProductsListApi", "getProductPriceApi"]),
    searchfunction() {
      console.log(this.searchtext);
      this.productsList = this.getProductsList;
      axios.get(`/api/search/query/${this.searchtext}`).then((response) => {
        console.log(response.data);
        this.productsList = response.data;
      });
    },
    selectProducts(product) {
      console.log("from product listing", product);
      this.$emit("product-selected", product, "data");
    },
  },
  created: function () {
    this.$store.dispatch("getProductListApi", {
      success: (res) => {
        this.productsList = this.getProductsList;
        console.log(res);
        console.log("products list", this.productsList);
      },
    });
    this.$store.dispatch("getProductMerchantsApi");
  },
  data() {
    return {
      productsList: [],
      data: [],
      merchant: {},
      searchtext: "",
      // appendList: [],
    };
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
#products:hover {
  transform: scale(1.08);
}
/* .button {
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  } */
</style>
