<template>
  <div>
    <HeaderBar></HeaderBar>
    <div class="mainContainerActu">
      <div class="containerActu">
        <h1>ACTUALITES</h1>
        <EditPost />
      </div>
      <AsideBar></AsideBar>
    </div>
  </div>
</template>

<script>
import EditPost from "@/components/EditPost.vue";
import HeaderBar from "@/components/HeaderBar.vue";
import AsideBar from "@/components/AsideBar.vue";

export default {
  components: {
    EditPost,
    HeaderBar,
    AsideBar,
  },
};
</script>

<style scoped>
h1 {
  color: #474e58;
}

.containerActu {
  width: 85%;
}

.mainContainerActu {
  display: flex;
  position: relative;
  top: 8px;
}
</style>
