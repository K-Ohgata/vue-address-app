<template>
  <v-container>
    <v-layout>
      <v-flex xs12 mt-5>
        <v-btn color="info" @click="login" v-if="!$store.state.login_user">Googleアカウントでログイン</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Home",
  methods: {
    ...mapActions(["login"]),
  },
};
</script>
