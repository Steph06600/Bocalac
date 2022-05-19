<template>
  <div class="body">
    <HeaderBar class="headerBar" />
    <nav>
      <router-link to="/">Home</router-link> <br />
      <router-link to="/profile">profile</router-link> <br />
      <router-link to="/actus">actu</router-link>
    </nav>
    <AsideBar class="aside" />
    <router-view />
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
