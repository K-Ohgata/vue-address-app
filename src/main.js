import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import firebase from 'firebase'
Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyApSTBJ-F_dI4Unq3Cp3ab2xWuQl8UmpXE",
  authDomain: "my-vue-project-3ad18.firebaseapp.com",
  projectId: "my-vue-project-3ad18",
  storageBucket: "my-vue-project-3ad18.appspot.com",
  messagingSenderId: "749997651275",
  appId: "1:749997651275:web:6e38948b9a718355e224ce",
  measurementId: "G-5S7RLSPPLR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
