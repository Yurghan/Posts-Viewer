<template>
  <div class="singlePost">
    <h3>{{ title }}</h3>
    <h6>Post no. {{ id }}</h6>
    <h5>Author: {{ userId }}</h5>
    <h4>{{ shortBody }}</h4>

    <div class="actions">
      <base-button mode="outline" @click="deletePost">Delete</base-button>
      <base-button link :to="postDetailsLink">Read more</base-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'userId', 'title', 'body'],
  computed: {
    postDetailsLink() {
      return this.$route.path + '/' + this.id; // /posts/1
    },

    shortBody() {
      return this.body.slice(0, 30) + '...';
    },
  },

  methods: {
    // ❗ TODO ❗ - implementacja usuwania posta
    deletePost() {
      console.log('post was deleted');
    },
  },
};
</script>
