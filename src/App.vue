<template>
  <div class="body" @recupInfosUser="recupInfosUser">
    <HeaderBar class="headerBar" />
    <AsideBar class="aside" />
    <!-- <p>{{ nom }} {{ prenom }} {{ mail }}</p> -->
    <router-view :nom="lastnameGet" :prenom="firstnameGet" :mail="emailGet" />
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import AsideBar from "@/components/AsideBar.vue";

const App = {
  components: {
    HeaderBar,
    AsideBar,
  },

  // data() {
  //   return {
  //     nom: "",
  //     prenom: "",
  //     mail: "",
  //   };
  // },

  // methods: {
  //   recupInfosUser(getUserNom, getUserPrenom, getUserMail) {
  //     this.nom = getUserNom;
  //     this.prenom = getUserPrenom;
  //     this.mail = getUserMail;
  //     console.log("cc");
  //   },
  // },
  data() {
    return {
      // récupération des données
      firstnameGet: "",
      lastnameGet: "",
      emailGet: "",
    };
  },

  methods: {
    async getUser() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + localStorage.getItem("token"),
        },
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/bocalac/user",
        options
      );

      const data = await response.json();

      this.firstnameGet = data.firstname;
      this.lastnameGet = data.lastname;
      this.emailGet = data.email;

      console.log("cc");

      // this.$emit(
      //   "recupInfosUser",
      //   this.lastnameGet,
      //   this.firstnameGet,
      //   this.emailGet
      // );

      // console.log(this.firstnameGet + this.lastnameGet + this.emailGet);
    },
  },
};
export default App;
</script>

<style scoped>
.body {
  width: 79%;
  padding: 3%;
}

.headerBar {
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
}

nav {
  margin-top: 7%;
}
.aside {
  position: fixed;
  right: 0;
  height: 100vh;
  top: 64px;
  z-index: 100;
}
</style>
