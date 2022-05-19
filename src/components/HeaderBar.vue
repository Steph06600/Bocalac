<template>
  <nav>
    <img src="../assets/img/canardBocalacContours.png" alt="" />
    <input type="text" placeholder="Rechercher" />
    <div id="picture">
      <div>Photo</div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>

<style>
nav {
  display: flex;
  align-items: center;
  background-color: #c4c4c4;
  padding: 12px;
  margin: -8px;
}
img {
  width: 40px;
  height: 40px;
}

input {
  margin: 0 20px;
  border-radius: 7px;
  border: 2px solid #474e58;
}

nav #picture {
  border-radius: 20px;
  background: white;
  height: 40px;
  width: 40px;
  border: 1px solid #474e58;
  line-height: 40px;
  position: absolute;
  right: 0px;
  margin: 0 20px;
}
</style>
