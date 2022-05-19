<template>
  <!-- <navBar></navBar> -->
  <!-- <nav v-show="page == 'profile'">
    <img src="" alt="" />
    <p>Logo</p>
    <input type="text" placeholder="Rechercher" />
    <p @click="changePageToEdit">Photo de profil</p>
  </nav> -->
  <section id="modificationContainer" v-show="page == 'edit'">
    <div id="titleModif">
      <h1 id="title">MODIFICATION DU PROFIL</h1>
      <!-- <button @click="changePageToProfile">X</button> -->
      <button v-show="changePageToProfile">X</button>
    </div>
    <div id="blocEditPhotoNom">
      <div id="photoContainer">
        <p id="photoProfil"></p>
        <p>Photo de profil</p>
      </div>
      <div id="editNomContainer">
        <div id="blocNom">
          <div id="lastname">
            <label for="">Nom</label>
            <input type="text" v-model="lastname" />
          </div>
          <div id="blocPrenom">
            <label for="">Prénom</label>
            <input type="text" v-model="firstname" />
          </div>
        </div>
        <div id="blocDescription">
          <label for="">Description</label>
          <input type="textarea" v-model="description" />
        </div>
      </div>
    </div>
    <button id="buttonSave" @click="saveData">ENREGISTRER</button>
    <p>Vous avez enregistré</p>
  </section>
</template>

<script>
export default {
  methods: {
    changePageToEdit() {
      this.page = "edit";
    },

    changePageToProfile() {
      this.page = "profile";
    },

    /* SAUVEGARDE DES DONNEES */
  },
  data() {
    return {
      closeEditProfile: true,
      page: "profile",
      profilePicture: "",
      lastname: "",
      firstname: "",
      description: "",
      saveData: [],
    };
  },
};
</script>

<style>
#modificationContainer {
  position: relative;
  flex-direction: column;
  background-color: #474e58;
  color: white;
  width: 50%;
  text-align: center;
  margin: auto;
  border-radius: 7px;
  font-family: sans-serif;
  font-weight: 500;
  height: 400px;
}
/* BLOC TITRE */

#titleModif h1 {
  font-weight: normal;
  font-size: 20px;
  padding: 4vh;
}

#titleModif button {
  top: 8px;
  right: 8px;
  position: absolute;
  border-radius: 20px;
  border: none;
  height: 30px;
  width: 30px;
  font-size: 15px;
  color: grey;
  background-color: white;
}

#photoContainer {
  margin: 3vh 20px;
  padding: 0 20px;
  width: 40%;
}

#blocEditPhotoNom {
  display: flex;
}

#lastname {
  display: flex;
  flex-direction: column;
}

#blocDescription {
  display: flex;
  margin: 3vh;
  flex-direction: column;
}

#blocDescription input {
  margin: 5px;
  height: 60px;
  border: none;
  border-radius: 8px;
}

#edit {
  display: flex;
}
#editNomContainer {
  padding: 0 3vh;
}

#blocNom {
  display: flex;
  margin: 3vh;
}

#blocNom input {
  margin: 5px;
  border-radius: 8px;
  border: none;
  height: 20px;
  margin-right: 5px;
}

/* PHOTO FLEX*/
#photoProfil {
  background-color: white;
  border-radius: 50px;
  height: 100px;
  width: 100px;
  margin: auto;
}

#buttonSave {
  border: none;
  color: #474e58;
  border-radius: 8px;
  background: white;
  height: 20px;
  font-weight: bold;
  padding: 20px;
  line-height: 0px;
}
</style>
