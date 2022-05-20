<template>
  <div class="content">
    <EditPost class="editpost" />
    <Comments class="comments" />
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

<style scoped>
.editpost,
.comments {
  width: 100%;
}

.content {
  padding: 4% 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
