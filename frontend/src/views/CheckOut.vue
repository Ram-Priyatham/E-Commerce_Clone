<template>
  <h1>Thank you for placing the Order</h1>
</template>

<script>
export default {
  created: function () {
    setTimeout(() => {
      this.$router.push("/");
    }, 4000);
  },
};
</script>
