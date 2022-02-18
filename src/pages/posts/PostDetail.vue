<template>
  <section>
    <base-card>
      <router-link to="/posts">Go back </router-link>
      <h1>{{ title }}</h1>
      <h4>Author{{ userId }}</h4>
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
    userId() {
      return this.selectedPost.userId;
    },
    title() {
      return this.selectedPost.title;
    },
    body() {
      return this.selectedPost.body;
    },
  },

  created() {
    this.selectedPost = this.$store.getters['posts/posts'].find(
      (post) => +post.id === +this.id
    );
  },
};
</script>
