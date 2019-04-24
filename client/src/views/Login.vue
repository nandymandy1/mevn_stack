<template>
  <div>
    <h1>Login</h1>
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header bg-primary text-white">
          <h3 color="text-white">Login</h3>
        </div>
        <div class="card-body">
          <form @submit.prevent="loginUser">
            <div class="form-group">
              <label for="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                name="username"
                v-model="username"
                class="form-control"
              >
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                v-model="password"
                placeholder="Password"
                class="form-control"
              >
            </div>
            <button class="btn btn-primary">Login</button>
            &nbsp;
            &nbsp;
            &nbsp;
            <router-link class="card-link" to="/register">Need an account?</router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    loginUser() {
      let user = {
        username: this.username,
        password: this.password
      };
      this.login(user)
        .then(res => {
          if (res.data.success) {
            this.$router.push("/profile");
          }
        })
        .catch(err => {
          console.log(err.response.data.msg);
        });
    }
  }
};
</script>

<style scoped>
.card {
  width: 50%;
  border-radius: 0;
}
.btn {
  border-radius: 0;
}
.form-control {
  border-radius: 0;
}
</style>