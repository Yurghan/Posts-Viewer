<template>
  <li>
    <h3>{{ title }}</h3>
    <h6>Post no. {{ id }}</h6>
    <h5>Author: {{ userId }}</h5>
    <h4>{{ shortBody }}</h4>

    <div class="actions">
      <base-button mode="outline" @click="deletePost">Delete</base-button>
      <base-button link :to="postDetailsLink">Read more</base-button>
    </div>
  </li>
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

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
