<template>
  <div class="editPost">
    <input v-model="post" type="text" placeholder="Ecrivez votre post" />
    <div class="buttons">
      <p>{{ fileName }}</p>
      <div v-if="fileUrl" class="previewFile">
        <img :src="fileUrl" alt="" />
      </div>

      <div class="img">
        <input @change="addFile" id="file" class="inputFile" type="file" />
        <label for="file" class="trombone">
          <img src="../assets/img/trombone48.png" alt="" />
        </label>
      </div>

      <button>Publier</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileUrl: null,
      fileName: null,
      post: "",
    };
  },
  methods: {
    addFile(e) {
      let file = e.target.files[0];
      this.fileUrl = URL.createObjectURL(file);
      let nameFile = e.target.files[0].name;
      this.fileName = nameFile;
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

.editPost {
  display: Flex;
  flex-direction: column;
  padding: 2%;
  align-items: center;
  background-color: #474e58;
  border-radius: 10px;
  border: 3px solid white;
  box-shadow: 2px 4px 3px grey;
  gap: 20px;
}

input {
  width: 100%;
  padding: 1%;
  border: 2px solid black;
  border-radius: 5px;
  color: #474e58;
}

.buttons {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}

.buttons p {
  padding-top: 10px;
  color: white;
}

.inputFile {
  display: none;
}

.img {
  width: 38px;
  height: 38px;
  background: white;
  border-radius: 50%;
  padding: 5px;
}

.trombone {
  position: relative;
  display: flex;
  width: 38px;
  background: white;
  border-radius: 50%;
  padding: 5px;
  border: 2px solid #5adfbc;
  bottom: 5px;
  right: 5px;
  cursor: pointer;
}

img {
  width: 100%;
}

.previewFile {
  width: 40px;
  height: 40px;
  background: white;
  padding: 5px;
  border: 2px solid #5adfbc;
}

button {
  padding: 0 2%;
  background: white;
  border: 2px solid #5adfbc;
  border-radius: 10px;
  color: #474e58;
}
</style>
