<template>
  <div>
    <input
      v-model="postCommentaire"
      type="text"
      placeholder="Ecrivez votre commentaire"
    />
    <button @click="publish" class="button">Publier</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
button {
  cursor: pointer;
}
</style>
