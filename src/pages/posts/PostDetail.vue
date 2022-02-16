<template>
  <section>
    <base-card>
      <h2>{{ title }}</h2>
      <h3>{{ fullName }}</h3>
      <p>{{ body }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],

  data() {
    return {
      selectedPost: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedPost.fullName;
    },
    title() {
      return this.selectedPost.title;
    },
    body() {
      return this.selectedPost.body;
    },
  },

  created() {
    console.log(this.id);
    this.selectedPost = this.$store.getters['posts/posts'].find(
      (post) => post.id === this.id
    );
  },
};
</script>

<style></style>
