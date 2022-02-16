<template>
  <li>
    <h3>{{ title }}</h3>
    <h5>{{ fullName }}</h5>
    <h4>{{ shortBody }}</h4>

    <div class="actions">
      <base-button mode="outline" link :to="postDetailsLink"
        >Delete</base-button
      >
      <base-button link :to="postDetailsLink">Read more</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'fullName', 'title', 'body'],
  computed: {
    postDetailsLink() {
      return this.$route.path + '/' + this.id; // /post/1
    },

    shortBody() {
      return this.body.slice(0, 30) + '...';
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
