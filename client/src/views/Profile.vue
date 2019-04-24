<template>
  <div>
    <h3>Profile</h3>
    <div class="card mx-auto">
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">Username: {{ user.username }}</li>
          <li class="list-group-item">Name: {{ user.name }}</li>
          <li class="list-group-item">Email: {{ user.email }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: mapGetters(["user"]),
  methods: {
    ...mapActions(["loadProfile"])
  },
  created() {
    this.loadProfile();
  }
};
</script>