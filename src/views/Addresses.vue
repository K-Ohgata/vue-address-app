<template>
  <v-container text-xs-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>連絡先一覧</h1>
      </v-flex>
      <v-flex xs12 mt-5 mr-5 text-right>
        <router-link :to="{ name: 'Address_edit' }">
          <v-btn color="info"> 連絡先追加 </v-btn>
        </router-link>
      </v-flex>

      <v-flex xs12 mt-5 justify-center>
        <v-data-table :headers="headers" :items="addresses">
          <template v-slot:item.edit="{ item }">
            <router-link
              :to="{ name: 'Address_edit', params: { address_id: item.id } }"
            >
              <v-icon small class="mr-2">mdi-pencil</v-icon>
            </router-link>
          </template>
          <template v-slot:item.delete="{ item }">
            <v-icon small class="mr-2" @click="deleteConfirm(item.id)"
              >mdi-delete</v-icon
            >
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Addresses",
  data() {
    return {
      headers: [
        { text: "名前", value: "name" },
        { text: "電話番号", value: "tel" },
        { text: "メールアドレス", value: "email" },
        { text: "住所", value: "address" },
        { text: "編集", value: "edit" },
        { text: "削除", value: "delete" },
      ],
      addresses: [],
    };
  },
  created() {
    this.addresses = this.$store.state.addresses;
  },
  methods: {
    deleteConfirm(id) {
      if (confirm("削除してよろしいですか？")) {
        this.deleteAddress({ id });
      }
    },
    ...mapActions(["deleteAddress"]),
  },
};
</script>

<style scoped lang="scss"></style>
