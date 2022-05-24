<template>
  <!-- v-for="element in listCommentaires" :key="element._id" -->

  <div>
    <!-- <button @click="getcommentaire()">afficher les com's</button> -->

    <div>
      <input
        v-model="postCommentaire"
        id=""
        type="text"
        placeholder="Ecrivez votre commentaire"
      />
      <button @click="postComment()">Publier</button>
    </div>
    <div class="scroll-div">
      <div v-for="element in listCommentaires" :key="element._id">
        <p v-for="ele in element.comments" :key="ele._id">
          <span>{{ ele.firstname }} : </span> {{ ele.content }}
        </p>
      </div>
    </div>
  </div>

  <!-- 
  element.comments.content -->
</template>

<script>
export default {
  data() {
    return {
      postCommentaire: "",
      token: localStorage.getItem("token"),
      listCommentaires: [],
    };
  },
  props: {
    id: String,
  },

  mounted() {
    this.getcommentaire();
  },

  methods: {
    // Créer un commentaire
    async postComment() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          postId: this.id,
          content: this.postCommentaire,
        }),
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/bocalac/post/comment",
        options
      );

      const data = await response.json();
      this.postCommentaire = "";

      console.log(response);
      console.log(data);

      // if (response.status === 200) {
      //   this.postCommentaire = "";
      // }
    },

    //  Récupérer tous les posts
    async getcommentaire() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/bocalac/posts",
        options
      );

      const data = await response.json();
      this.listCommentaires = data.posts;
      console.log(this.listCommentaires);
    },
  },
};
</script>

<style scoped>
.scroll-div {
  height: 220px;
  overflow-y: scroll;
}

button {
  cursor: pointer;
}
input {
  border-radius: 5px;
}

p {
  border: 2.5px solid #5adfbc;
  border-radius: 7px;
  width: fit-content;
  padding: 0.5% 1%;
  background-color: white;
  color: #474e58;
}
span {
  font-weight: bold;
}

button {
  border-radius: 10px;
  border: 2px solid #5adfbc;
  background-color: white;
}

button:hover {
  border-radius: 10px;
  border: 2px solid #5adfbc;
  background-color: #5adfbc;
  color: white;
  cursor: pointer;
}
</style>
