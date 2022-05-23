<template>
  <div class="content">
    <button class="clickbtn" @click="getpost">Afficher les posts</button>
    <div class="all" v-for="element in posts" :key="element.id">
      <div class="topComment">
        <div class="Profil">
          <img
            class="imageprofil"
            src="../assets/img/canardBocalacContours.png"
          />
          <div>
            <p class="firstname">{{ element.firstname }}</p>
            <p class="date">{{ element.date }}</p>
          </div>
        </div>
        <div>
          <button class="dot">● ● ●</button>
        </div>
      </div>

      <div class="comment">
        <p>{{ element.content }}</p>
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
          <button
            @click="
              openCommentPostId =
                openCommentPostId === element._id ? null : element._id
            "
            class="commentaire"
          >
            voir les commentaires ({{ posts.length }})
          </button>
          <button @click="commentaire">Commenter</button>
          <button>Partager</button>
        </div>
      </div>
      <Commentaire v-if="openCommentPostId === element._id" class="" />
    </div>

    <!-- <div v-for="element in posts" :key="element.id">
      <p class="" @click="EditPost">
        {{ element.firstname }} {{ element.lastname }}
      </p>
      {{ element.content }}
    </div> -->
  </div>
  <!-- li v-for="element in posts" :key="element" element.posts[0].content -->
  <!-- v-for="(element, index) in posts" :key="index" -->
  <!-- v-for="(element, index) in posts" :key="element.id" -->
</template>

<script>
import EditPost from "@/components/EditPost.vue";
import Commentaire from "@/components/Commentaire.vue";
export default {
  components: {
    EditPost,
    Commentaire,
  },

  name: "comments",

  data() {
    return {
      pseudo: "",
      comments: "",
      like: 0,
      dislike: 0,
      posts: [],
      page: 1,
      totalPages: 1,
      openCommentPostId: false,
    };
  },

  // props: {
  //   post: String,
  // },

  methods: {
    addLike() {
      this.like += 1;
    },

    addDislike() {
      this.dislike += 1;
    },

    // openCommentPostId(e){
    //   this. = e.target.value;
    // }

    async getpost() {
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
      this.posts = data.posts;

      console.log(this.posts);
    },

    async commentaire() {
      const options = {
        method: "POST",
        body: JSON.stringify({
          postId: this.id,
          content: this.content,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/bocalac/post/comment",
        options
      );
      const data = await response.json();
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
.content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.comment {
  padding-left: 5%;
}

.clickbtn {
  width: 15%;
}
/*  TOP  */
.topComment {
  display: flex;
  justify-content: space-between;
}
.imageprofil {
  width: 40px;
  height: 40px;
}
.Profil {
  display: flex;
  width: 20%;
  align-items: center;
  gap: 10px;
}

.firstname {
  font-size: 1.25em;
}

.date {
  color: #e0e0e0;
  font-size: 0.8em;
  position: relative;
  top: -12px;
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
  display: flex;
  align-items: center;
  gap: 5px;
}

.commentaire {
  border: none;
  color: #e0e0e0;
  background-color: #474e58;
  cursor: pointer;
}

.button {
  padding: 0 2%;
  background: white;
  border: 2px solid #5adfbc;
  border-radius: 10px;
  color: #474e58;
  padding: 1% 3%;
}
</style>
