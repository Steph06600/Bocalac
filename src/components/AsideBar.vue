<template>
  <aside class="containerFriends">
    <section id="connectedFriends">
      <p class="titleAside">Amis connectés</p>
      <div class="rondFlex">
        <div class="rond"></div>
        <div class="rond"></div>
        <div class="rond"></div>
        <div class="rond"></div>
        <div class="rond"></div>
        <div class="rond"></div>
        <div class="rond"></div>
        <div class="rond"></div>
      </div>
    </section>
    <section id="friends"></section>
    <p class="titleAside">Amis</p>
    <div class="rondFlex">
      <div class="rond"></div>
      <div class="rond"></div>
      <div class="rond"></div>
      <div class="rond"></div>
    </div>
  </aside>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
.mainContainerProfile {
  display: flex;
  position: relative;
  top: 8px;
}

.titleAside {
  color: #474e58;
  padding: 20px 20px 5px 20px;
  margin: 0px;
}

.containerProfile {
  width: 85%;
}

.containerFriends {
  background-color: #e0e0e0;
  width: 15%;
  border-left: 4px solid #5adfbc;
}

.rond {
  border-radius: 30px;
  height: 30px;
  width: 30px;
  background-color: white;
  margin: 10px;
  padding: 10px;
}

.rondFlex {
  display: flex;
  flex-wrap: wrap;
}
</style>
