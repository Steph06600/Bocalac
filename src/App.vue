<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> <br />
      <router-link to="/profile">profile</router-link> <br />
      <router-link to="/actus">actu</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
const App = {};
export default App;
</script>
