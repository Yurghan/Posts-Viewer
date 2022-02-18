<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <post-filter @change-filter="setFilters"> </post-filter>
    </section>
    <section>
      <base-card>
        <PostsPagination
          :totalItems="filteredPosts.length"
          :items="
            (filteredPosts &&
              filteredPosts.map((c) => {
                return {
                  id: c.id,
                  title: c.title,
                  userId: c.userId,
                  body: c.body,
                };
              })) ||
            []
          "
        >
          <template #data="{ paginatedItems }">
            <post-item
              v-for="item in paginatedItems"
              :key="item.id"
              :id="item.id"
              :userId="item.userId"
              :title="item.title"
              :body="item.body"
            >
            </post-item>
          </template>
        </PostsPagination>
      </base-card>
    </section>
  </div>
</template>

<script>
import PostItem from '../../components/posts/PostItem.vue';
import PostFilter from '../../components/posts/PostFilter.vue';
import PostsPagination from '../../components/posts/PostsPagination.vue';

export default {
  components: {
    PostsPagination,
    PostItem,
    PostFilter,
  },

  data() {
    return {
      isLoading: false,
      error: null,
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
      return !this.isLoading && this.$store.getters['posts/hasPosts'];
    },
  },

  created() {
    this.loadPosts();
  },

  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },

    async loadPosts() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('posts/loadPosts');
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }

      this.isLoading = false;
    },

    handleError() {
      this.error = null;
    },
  },
};
</script>
