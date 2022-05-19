<template>
  <div class="myProfile">
    <h1>profil</h1>
    <HeaderBar></HeaderBar>
    <ModifProfile></ModifProfile>
    <Postcontainer />
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import ModifProfile from "@/components/ModifProfile.vue";
import Postcontainer from "@/components/Postcontainer.vue";

export default {
  components: {
    HeaderBar,
    ModifProfile,
    Postcontainer,
  },
};
</script>
