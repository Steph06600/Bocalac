<template>
  <section id="modificationContainer">
    <div id="titleModif">
      <h1 id="title">MODIFICATION DU PROFIL</h1>
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
            <input type="text" v-model="lastname" :placeholder="lastname" />
          </div>
          <div id="blocPrenom">
            <label for="">Prénom</label>
            <input type="text" v-model="firstname" :placeholder="firstname" />
          </div>
        </div>
        <div id="blocDescription">
          <label for="">Description</label>
          <input type="textarea" v-model="description" />
        </div>
      </div>
    </div>
    <button id="buttonSave" @click="saveNewDatas">ENREGISTRER</button>
    <p>Vous avez enregistré</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      page: "profile",
      profilePicture: "",
      lastname: "",
      firstname: "",
      description: "",
      token: localStorage.getItem("token"),
      saveData: [],
    };
  },
  name: "ModifProfile",

  /* Methods */
  methods: {
    saveNewDatas(e) {
      let newLastname = this.lastname;
      let newFirstname = this.firstname;
      let newDescription = this.description;
    },

    /* API */
    async modifProfile() {
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer token",
        },
        body: JSON.stringify({
          firstname: this.firstname,
          lastname: this.lastname,
          description: this.description,
        }),
      };

      const response = await fetch(
        " https://social-networkapi.osc-fr1.scalingo.io/demo/login ",
        options
      );
      const data = await response.json();

      console.log(response);
      console.log(data);
    },
  },
};
</script>

<style scoped>
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
