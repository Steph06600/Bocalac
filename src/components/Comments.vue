<template>
  <div>
    <button @click="getpost">Commenter</button>
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
          <button @click="getpost">Commenter</button>
          <button @click="commentaire">Partager</button>
        </div>
      </div>
    </div>
  </div>
  <!-- li v-for="element in posts" :key="element" element.posts[0].content -->
  <!-- v-for="(element, index) in posts" :key="index" -->
  <!-- v-for="(element, index) in posts" :key="element.id" -->
</template>

<script>
import EditPost from "@/components/EditPost.vue";
export default {
  components: {
    EditPost,
  },

  name: "commentaire",

  data() {
    return {
      pseudo: "",
      comments: "",
      like: 0,
      dislike: 0,
      posts: [],
      page: 1,
      totalPages: 1,
    };
  },

  props: {
    post: String,
    // posts: String,
    id: String,
    successCallback: Function,
    firstname: String,
    lastname: String,
    content: String,
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
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/bocalac/posts",
        options
      );

      const data = await response.json();
      this.posts = data.posts;

      console.log(this.posts);
      // console.log(data.posts[0]);

      // if (response.status === 200) {
      //   this.userProfile.firstname = posts.firstname;
      //   this.userProfile.lastname = posts.lastname;
      //   this.emailProfile.currentEmail = posts.email;
      // }
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

      // if (response.status === 200) {
      //   this.successCallback();
      //   this.content = "";
      //   this.textOk = false;
      // }
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
.imageprofil {
  margin-top: 6%;
  padding-right: 8%;
  height: 8vh;
  width: 8vh;
}
.Profil {
  display: flex;
}

.firstname {
  font-size: 1.25em;
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
