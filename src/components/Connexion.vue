<template>
  <div>
    <!-- formulaire de connexion -->
    <section id="logging">
      <div class="logoBocalac">
        <img
          src="../assets/img/canardBocalacContours.png"
          alt="canardBocalacContours"
        />
      </div>

      <div v-show="!show" class="logForm">
        <form @submit.prevent="onSubmit" class="form">
          <div class="logoTextBocalac">
            <img
              src="../assets/img/bocalacTextWhite.png"
              alt="bocalacTextBlack"
            />
          </div>

          <label class="alignPseudo" for="pseudo">Pseudo </label> <br />
          <input type="text" id="pseudo" /> <br />

          <div class="alignMdpForgetMdp">
            <label class="labelMdp" for="mdp">Mot de passe </label>
            <a href="">Mot de passe oublié? </a>
          </div>
          <input type="password" name="mdp" id="mdp" /> <br />

          <button type="submit">Valider</button>
          <br />

          <div class="linkInscription">
            <p class="animationHover" @click="show = !show">
              Tu n'as pas de compte? Inscris-toi.
            </p>
          </div>
        </form>
      </div>

      <!-- formulaire d'inscription -->
      <section id="inscription">
        <div v-show="show" class="logForm">
          <form @submit.prevent="onSubmit" class="formInscription">
            <div class="logoTextBocalac">
              <img
                src="../assets/img/bocalacTextWhite.png"
                alt="bocalacTextBlack"
              />
            </div>

            <label class="mailStyle" for="mail">Mail </label> <br />
            <input
              type="email"
              name="mail"
              id="mail"
              :class="isEmailValid ? 'valid' : 'error'"
              v-model="mail"
            />

            <p
              class="textVerification"
              v-show="!isEmailValid && this.mail.length >= 1"
            >
              Veuillez rentrer un email valide.
            </p>

            <label class="pseudoInscription" for="pseudoInscription"
              >Pseudo
            </label>
            <br />
            <input
              type="text"
              id="pseudoInscription"
              :class="isUsernameValid ? 'valid' : 'error'"
              v-model="pseudoInscription"
            />
            <p
              class="textVerification"
              v-show="!isUsernameValid && this.pseudoInscription.length >= 1"
            >
              Un nom d'utilisateur doit être compris entre 8 et 16 caractères.
            </p>

            <br />

            <label class="mdpInscription" for="createMdp">Mot de passe </label>
            <br />
            <input
              type="password"
              name="createMdp"
              id="createMdp"
              :class="isPasswordValid ? 'valid' : 'error'"
              v-model="createMdp"
            />
            <p
              class="textVerification"
              v-show="!isPasswordValid && this.createMdp.length >= 1"
            >
              Un mot de passe doit faire au moins 8 caractères dont une lettre
              majuscule et un chiffre
            </p>
            <br />

            <label class="confirmMdpStyle" for="confirmMdp"
              >Confirmation du mot de passe
            </label>
            <br />
            <input
              type="password"
              name="confirmMdp"
              id="confirmMdp"
              v-model="confirmMdp"
              :class="verifyPassword"
            />
            <p
              class="textVerification"
              v-show="verifyPassword == false && this.confirmMdp.length >= 1"
            >
              Veuillez entrer le même mot de passe
            </p>
            <p class="textVerificationGreen" v-show="verifyPassword == true">
              Correct
            </p>

            <br />

            <button
              v-show="
                isEmailValid &&
                isUsernameValid &&
                isPasswordValid &&
                verifyPassword
              "
              type="submit"
            >
              Valider
            </button>
            <br />
          </form>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      mail: "",
      pseudoInscription: "",
      createMdp: "",
      confirmMdp: "",
    };
  },

  computed: {
    isEmailValid() {
      const regex = new RegExp(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/);
      return regex.test(this.mail);
    },

    isUsernameValid() {
      const length = this.pseudoInscription.length;
      return length >= 8 && length <= 16;
    },

    isPasswordValid() {
      const regex = new RegExp(/(?=.*\d)(?=.*[A-Z]).{8,}/);
      return regex.test(this.createMdp);
    },

    verifyPassword() {
      const mdp = this.createMdp;
      const verifMdp = this.confirmMdp;
      if (mdp != verifMdp) {
        return false;
      } else if (mdp === "") {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style scoped>
/* formulaire de connexion */
#logging {
  display: flex;
  min-height: 96vh;
  justify-content: center;
  align-items: center;
  gap: 5%;
}
.logoBocalac img {
  width: 300px;
  height: 300px;
}

.logoTextBocalac img {
  width: 230px;
  height: 40px;
  padding-top: 40px;
  padding-bottom: 80px;
}

.form {
  border: solid 1px white;
  text-align: center;
  width: 420px;
  border-radius: 10px;
  background-color: #474e58;
}

#pseudo {
  width: 300px;
  margin-bottom: 40px;
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: solid 3px;
}

.alignPseudo {
  margin-right: 252px;
  color: white;
}

#mdp {
  width: 300px;
  margin-bottom: 40px;
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: solid 3px;
}

.alignMdpForgetMdp {
  padding-bottom: 2px;
}

.labelMdp {
  padding-right: 72px;
  color: white;
}

.logForm button {
  padding: 5px 40px;
  margin-bottom: 40px;
  background-color: white;
}

/* Hover sur  "inscris toi" paragraphe */

.animationHover {
  box-shadow: inset 0 0 0 0 #5adfbc;
  color: #5adfbc;
  padding: 0 0.25rem;
  margin: 0 -0.25rem;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  border-radius: 10px;
}
.animationHover:hover {
  color: #474e58;
  box-shadow: inset 400px 0 0 0 #5adfbc;
  border-radius: 10px;
}

.animationHover {
  color: #5adfbc;
  font-size: 17px;
  line-height: 1.5;
  font-weight: 700;
  text-decoration: none;
  text-align: initial;
  margin-left: 88px;
  margin-right: 72px;
}

/* style formulaired d'inscription */

.formInscription {
  border: solid 1px white;
  text-align: center;
  width: 420px;
  height: 570px;
  border-radius: 10px;
  background-color: #474e58;
}

.linkInscription {
  margin-bottom: 40px;
}

.linkInscription p {
  color: #5adfbc;
}

.mailStyle {
  color: white;
  margin-right: 17rem;
}

.pseudoInscription {
  color: white;
  margin-right: 16rem;
}

.mdpInscription {
  color: white;
  margin-right: 13.5rem;
}

#mail {
  width: 300px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: solid 3px black;
  padding-bottom: 5px;
  padding-top: 5px;
}

#pseudoInscription {
  width: 300px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: solid 3px black;
  padding-bottom: 5px;
  padding-top: 5px;
}

#createMdp {
  width: 300px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: solid 3px black;
  padding-bottom: 5px;
  padding-top: 5px;
}

#confirmMdp {
  width: 300px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: solid 3px black;
  padding-bottom: 5px;
  padding-top: 5px;
}

.confirmMdpStyle {
  color: white;
  margin-right: 7rem;
}

.textVerification {
  color: white;
  margin-left: 50px;
  margin-right: 50px;
}

.textVerificationGreen {
  color: #5adfbc;
}
</style>
