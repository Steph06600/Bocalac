<template>
  <div>
    <EditPost />
    <br />
    <Comments />
  </div>
</template>

<script>
import Comments from "@/components/Comments.vue";
import EditPost from "@/components/EditPost.vue";
export default {
  name: "",
  components: {
    Comments,
    EditPost,
  },
};
</script>
