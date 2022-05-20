<template>
  <div>
    <input
      v-model="postCommentaire"
      type="text"
      placeholder="Ecrivez votre commentaire"
    />
    <button @click="publish">Publier</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
