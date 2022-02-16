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
          :fullName="post.fullName"
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
        kowalski: true,
        nowak: true,
      },
    };
  },

  computed: {
    filteredPosts() {
      const posts = this.$store.getters['posts/posts'];
      return posts.filter((post) => {
        if (
          this.activeFilters.kowalski &&
          post.fullName.includes('Jan Kowalski')
        ) {
          return true;
        }
        if (this.activeFilters.nowak && post.fullName.includes('Jan Nowak')) {
          return true;
        }
        return false;
      });
    },

    hasPosts() {
      return this.$store.getters['posts/hasPosts'];
    },
  },

  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
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
