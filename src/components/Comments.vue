<template>
  <div class="all">
    <div class="topComment">
      <div class="Profil">
        <img src="" />
        <div>
          <p>Pseudo{{ pseudo }}</p>
          <p class="date">Il y 1h {{ heure - du - commentaire }}</p>
        </div>
      </div>
      <div>
        <button class="dot">● ● ●</button>
      </div>
    </div>

    <div class="comment">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo impedit
        repellat qui deleniti similique consequatur ea deserunt excepturi fugit
        error dolore, nam reiciendis natus tenetur? Assumenda consectetur
        similique quia aliquid!
      </p>
      <p>{{ futur - comments }}</p>
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
        <button>Commenter</button>
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
    };
  },

  props: {},

  methods: {
    addLike() {
      this.like += 1;
    },

    addDislike() {
      this.dislike += 1;
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
