<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-10 col-xl-9 mx-auto">
        <div
          class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden"
        >
          <div class="card-img-left d-none d-md-flex">
            <!-- Background image for card set in CSS! -->
          </div>
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
            <div>
              <div class="form-floating mb-3">
                <input
                  v-model="email"
                  type="email"
                  class="form-control"
                  id="floatingInputEmail"
                  placeholder="name@example.com"
                />
                <label for="floatingInputEmail">Email address</label>
              </div>
              <hr />
              <div class="form-floating mb-3">
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>
              <hr class="my-4" />
              <div class="d-grid mb-2">
                <button
                  class="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                  @click="loginuser"
                >
                  Sign In
                </button>
              </div>
              <router-link
                class="nav-link d-block text-center mt-2 small link-primary"
                to="/userregistration"
                >Don't have an account? Register !</router-link
              >
              <hr class="my-4" />
              <div class="d-grid mb-2">
                <button
                  class="btn btn-lg btn-google btn-login fw-bold text-uppercase"
                  @click="googleloginuser"
                >
                  <i class="fab fa-google me-2"></i> Sign up with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import axios from "axios";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
export default {
  name: "UserLogIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async loginuser() {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        alert("Logged in");
        this.$globalData.userLogin = true;
        this.$globalData.userMail = this.email;
        // alert(this.$globalData.userMail);
        this.$router.push("/");
      } catch (err) {
        alert("Not an Valid User");
      }
    },
    async googleloginuser() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider)
        .then((result) => {
          console.log(result.user);
          console.log(result.user.email);
          this.$globalData.userLogin = true;
          this.$globalData.userMail = result.user.email;
          localStorage.setItem(this.$globalData.userMail, result.user.email);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
body {
  background: #007bff;
  background: linear-gradient(to right, #0062e6, #33aeff);
}

.card-img-left {
  width: 45%;
  /* Link to your background image using in the property below! */
  background: scroll center
    url("https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg");
  background-size: cover;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
}

.btn-google {
  color: white !important;
  background-color: #ea4335;
}

.btn-facebook {
  color: white !important;
  background-color: #3b5998;
}
</style>
