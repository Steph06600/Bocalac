<template>
  <div class="content">
    <div>
      <button v-show="page == 'edit'" @click="changePageToProfile">X</button>
      <ModifProfile v-show="page == 'edit'"></ModifProfile>
    </div>
    <div v-show="page == 'profile'">
      <div class="infosProfil">
        <div class="pdp" @click="changePageToEdit"></div>
        <div class="textInfosProfil">
          <p>Nom Prénom</p>
          <div class="statut">
            <p>Statut</p>
            <div class="pastilleStatut">vert</div>
          </div>
          <p>Ceci est une petite description / biographie</p>
        </div>
      </div>
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
.infosProfil {
  display: flex;
  gap: 20px;
  margin: 3%;
}

.textInfosProfil {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
}

.pdp {
  width: 110px;
  height: 110px;
  border: 2px solid black;
  border-radius: 50%;
  background-color: bisque;
  cursor: pointer;
}

.statut {
  display: flex;
  align-items: center;
  gap: 10px;
}

p {
  cursor: pointer;
  margin: 0;
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
