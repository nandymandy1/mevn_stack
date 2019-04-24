<template>
  <div>
    <h1>Register</h1>
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header bg-primary text-white">
          <h3 color="text-white">Register</h3>
        </div>
        <div class="card-body">
          <form @submit.prevent="registerUser">
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
              <label for="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                name="name"
                v-model="name"
                class="form-control"
              >
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                v-model="email"
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
            <div class="form-group">
              <label for="confirm_password">Confirm Password</label>
              <input
                type="confirm_password"
                name="confirm_password"
                v-model="confirm_password"
                placeholder="Confirm Password"
                class="form-control"
              >
            </div>
            <button class="btn btn-primary">Register</button>
            &nbsp;
            &nbsp;
            &nbsp;
            <router-link class="card-link" to="/login">Already have an account?</router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: "",
      name: "",
      email: "",
      confirm_password: ""
    };
  },
  methods: {
    ...mapActions(["register"]),
    registerUser() {
      let user = {
        name: this.name,
        username: this.username,
        password: this.password,
        email: this.email,
        confirm_password: this.confirm_password
      };
      this.register(user)
        .then(res => {
          if (res.data.success) {
            this.$router.push("/login");
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