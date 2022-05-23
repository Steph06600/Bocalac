<template>
  <section id="container">
    <h2 id="title">MODIFICATION DU PROFIL</h2>
    <div id="bloc">
      <div id="photoProfil"></div>

      <div id="blockInput">
        <div id="blockPseudo">
          <div id="blocNom">
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

    <div class="button">
      <button id="buttonSave">ENREGISTRER</button>
      <p>Vous avez enregistré</p>
    </div>
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
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx FIN RESET xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx FIN RESET xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

#container {
  width: 80%;
  background: #474e58;
  border-radius: 10px;
  padding: 3%;
  margin: 10% auto;
  color: white;
  border: 3px solid white;
  box-shadow: 3px 6px 6px grey;
}

h2 {
  text-align: center;
}

#photoProfil {
  background-color: white;
  border-radius: 50px;
  height: 100px;
  width: 100px;
}

#bloc {
  display: flex;
  justify-content: space-around;
  margin: 7% auto;
  align-items: center;
}

#blockInput {
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

#blockPseudo {
  display: flex;
  justify-content: space-between;
}

#blocNom,
#blocPrenom,
#blocDescription {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
}

#blocNom,
#blocPrenom {
  width: 45%;
}

.button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>
