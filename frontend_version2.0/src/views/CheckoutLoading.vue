<template>
  <div>
    <h1>
      Your Item is Being Placed <br />
      Please wait.......
    </h1>
  </div>
</template>
<script>
export default {
  created: function () {
    setTimeout(() => {
      this.$router.push("/checkout");
    }, 14000);
  },
};
</script>
