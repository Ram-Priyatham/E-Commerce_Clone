<template>
  <div>
    <div class="text-center">
      <h1 class="display-3">
        Thank You! <br />
        Your order has been placed
      </h1>
      <p class="lead">
        <strong>Please check your email for confirmation</strong>
      </p>
      <hr />
      <p>Redirecting to home page</p>
    </div>
  </div>
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
