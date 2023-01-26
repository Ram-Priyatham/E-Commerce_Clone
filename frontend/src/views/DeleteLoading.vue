<template>
  <div>
    <h1>CART PAGE</h1>
  </div>
</template>
<script>
export default {
  created: function () {
    setTimeout(() => {
      this.$router.push("/cart");
    }, 20);
  },
};
</script>
