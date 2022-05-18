<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/profile">profile</router-link>
      <router-link to="/actus">actu</router-link>
    </nav>
    <h1>home</h1>
    <router-view />
  </div>
</template>

<script>
const App = {};
export default App;
</script>
