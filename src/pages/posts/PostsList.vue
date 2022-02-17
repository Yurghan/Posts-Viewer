<template>
  <section>
    <post-filter @change-filter="setFilters"> </post-filter>
  </section>
  <section>
    <base-card>
      <ul v-if="hasPosts">
        <post-item
          v-for="post in filteredPosts"
          :key="post.id"
          :id="post.id"
          :userId="post.userId"
          :title="post.title"
          :body="post.body"
        >
        </post-item>
      </ul>
      <h3 v-else>No posts found.</h3>
    </base-card>
  </section>
</template>

<script>
import PostItem from '../../components/posts/PostItem.vue';
import PostFilter from '../../components/posts/PostFilter.vue';

export default {
  components: {
    PostItem,
    PostFilter,
  },

  data() {
    return {
      activeFilters: {
        evenId: true,
        oddId: true,
      },
    };
  },

  computed: {
    filteredPosts() {
      const posts = this.$store.getters['posts/posts'];
      return posts.filter((post) => {
        if (this.activeFilters.evenId && !(post.id % 2)) {
          return true;
        }
        if (this.activeFilters.oddId && post.id % 2) {
          return true;
        }
        return false;
      });
    },

    hasPosts() {
      return this.$store.getters['posts/hasPosts'];
    },
  },

  created() {
    this.loadPosts();
  },

  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },

    loadPosts() {
      this.$store.dispatch('posts/loadPosts');
    },
  },
};
</script>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
