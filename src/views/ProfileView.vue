<template>
  <div class="myProfile">
    <HeaderBar></HeaderBar>
    <div class="mainContainerProfile">
      <div class="containerProfile">
        <h1>PROFIL</h1>
        <ModifProfile></ModifProfile>
        <Postcontainer />
      </div>
      <AsideBar></AsideBar>
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
};
</script>

<style scoped>
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
