<template>
  <div class="content">
    <div>
      <button v-show="page == 'edit'" @click="changePageToProfile">X</button>
      <ModifProfile v-show="page == 'edit'"></ModifProfile>
    </div>
    <div v-show="page == 'profile'">
      <p @click="changePageToEdit">Photo de profil</p>
      <Postcontainer />
    </div>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import ModifProfile from "@/components/ModifProfile.vue";
import Postcontainer from "@/components/Postcontainer.vue";
import AsideBar from "@/components/AsideBar.vue";

export default {
  components: {
    HeaderBar,
    ModifProfile,
    Postcontainer,
    AsideBar,
  },

  data() {
    return {
      // closeEditProfile: true,
      page: "profile",
    };
  },

  methods: {
    changePageToEdit() {
      this.page = "edit";
      console.log(this.page);
    },

    changePageToProfile() {
      this.page = "profile";
      console.log(this.page);
    },
  },
};
</script>

<style scoped>
p {
  cursor: pointer;
}

.content {
  padding: 2%;
}

button {
  position: relative;
  float: right;
  right: 20%;
  top: -20px;
}
h1 {
  color: #474e58;
}
.containerProfile {
  width: 85%;
}
.mainContainerProfile {
  display: flex;
  position: relative;
  top: 8px;
}
</style>
