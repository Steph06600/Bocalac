<template>
  <div class="all">
    <div class="topComment">
      <div class="Profil">
        <img src="" />
        <div>
          <p>Pseudo{{}}</p>
          <p class="date">Il y 1h {{}}</p>
        </div>
      </div>
      <div>
        <button class="dot">● ● ●</button>
      </div>
    </div>

    <div class="comment">
      <p>{{ post }}</p>
    </div>

    <div class="bottomComment">
      <div class="buttonlike">
        <button class="likeAndDislike" @click="addLike">
          <img src="../assets/img/like48.png" />
        </button>
        <p>{{ like }}</p>

        <button class="likeAndDislike" @click="addDislike">
          <img class="image180" src="../assets/img/like48.png" />
        </button>
        <p>{{ dislike }}</p>
      </div>
      <div class="buttonBottomRight">
        <button @click="getpost">Commenter</button>
        <button>Partager</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "commentaire",

  data() {
    return {
      pseudo: "",
      comments: "",
      like: 0,
      dislike: 0,
      posts: [],
      page: null,
      totalPages: null,
      message: "",
    };
  },

  props: {
    post: String,
  },

  methods: {
    addLike() {
      this.like += 1;
    },

    addDislike() {
      this.dislike += 1;
    },

    async getpost() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          posts: this.post,
          page: this.page,
          totalPages: this.totalPages,
          message: this.message,
        },
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/bocalac/posts",
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
/*  ALL  */
.all {
  background-color: #474e58;
  color: white;
  border-radius: 10px;
  padding: 0px 20px;
  border: 3px solid white;
  box-shadow: 2px 4px 3px grey;
}

/*  TOP  */
.topComment {
  display: flex;
  justify-content: space-between;
}

.Profil {
  display: flex;
}

.date {
  color: #e0e0e0;
}

.dot {
  color: #e0e0e0;
  background-color: #474e58;
  border: none;
  padding-top: 10px;
}

/*  BOT  */
.bottomComment {
  display: flex;
  justify-content: space-between;
}

.buttonlike {
  display: flex;
}

.image180 {
  transform: rotate(180deg);
  position: relative;
  top: 4px;
}

img {
  width: 20px;
  height: 20px;
}

.likeAndDislike {
  border: none;
  background: white;
  background-color: #474e58;
}

button {
  border-radius: 5px;
  border: 2px solid #5adfbc;
  background-color: white;
}

.buttonBottomRight {
  position: relative;
  top: 15px;
}
</style>
