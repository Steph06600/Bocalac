<template>
  <div>
    <HeaderBar class="headerBar" />
    <nav>
      <router-link to="/">Home</router-link> <br />
      <router-link to="/profile">profile</router-link> <br />
      <router-link to="/actus">actu</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
const App = {
  components: {
    HeaderBar,
  },
};
export default App;
</script>

<style scoped>
.headerBar {
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
}
</style>
