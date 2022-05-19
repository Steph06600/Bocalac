<template>
  <header>
    <nav>
      <div class="divGauche">
        <img src="../assets/img/canardBocalacContours.png" alt="" />
        <input type="text" placeholder="Rechercher" />
      </div>
      <div id="picture" @click="settingStatut1 = !settingStatut1">
        <p>Photo</p>
      </div>
    </nav>
    <Setting v-if="settingStatut1" class="setting"></Setting>
  </header>
</template>
<script>
import Setting from "@/components/Setting.vue";

export default {
  components: {
    Setting,
  },
  data() {
    return {
      settingStatut1: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  border-bottom: 5px solid #5adfbc;
  padding: 12px;
}
img {
  width: 40px;
  height: 40px;
}

.divGauche {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-left: 20px;
}

input {
  border-radius: 5px;
  border: none;
  padding: 2% 4%;
}

#picture {
  border-radius: 20px;
  background: white;
  height: 40px;
  width: 40px;
  margin-right: 20px;
  cursor: pointer;
}

.setting {
  width: 10% !important;
  float: right;
  margin-right: 4%;
  border: 2px solid white;
  box-shadow: 3px 4px 3px grey;
  z-index: 1000;
}
</style>
