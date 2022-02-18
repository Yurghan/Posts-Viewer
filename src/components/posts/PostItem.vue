<template>
  <div class="singlePost">
    <h3>Title: {{ title }} - Post no. {{ id }}</h3>
    <h5>Posted by: Author{{ userId }}</h5>
    <h4>Content: {{ shortBody }}</h4>

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
      console.log(
        `https://jsonplaceholder.typicode.com${this.$route.path}/${this.id}`
      );
      // fetch(
      //   `https://jsonplaceholder.typicode.com${this.$route.path}/${this.id}`,
      //   {
      //     method: 'DELETE',
      //   }
      // );
      // wyswtlenie postow bez tego usunietego
    },
  },
};
</script>
