<template>
  <div>
    <div class="pagination-row"></div>
    <div class="pagination-row">
      <button
        class="pagination-button"
        :disabled="pageNumber <= 1"
        @click="changePageNumber(pageNumber - 1)"
      >
        prev
      </button>
      <span v-for="(item, index) in new Array(numberPages)" :key="index">
        <button
          :class="[
            'pagination-button',
            pageNumber == index + 1 ? 'active' : '',
          ]"
          @click="changePageNumber(index + 1)"
        >
          {{ index + 1 }}
        </button>
      </span>
      <button
        class="pagination-button"
        :disabled="pageNumber >= numberPages"
        @click="changePageNumber(pageNumber + 1)"
      >
        next
      </button>
    </div>

    <slot
      name="data"
      :pageNumber="pageNumber"
      :itemsPerPage="perPage"
      :paginatedItems="paginatedItems"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNumber: Number(this.$route.query.pageNumber) || 1,
      perPage: 10,
    };
  },
  computed: {
    numberPages() {
      return Math.ceil(this.totalItems / this.perPage);
    },
    paginatedItems() {
      let end = this.perPage * this.pageNumber;
      return this.items.slice(end - this.perPage, end);
    },
  },
  methods: {
    changePageNumber(newPageNumber) {
      this.pageNumber = newPageNumber;
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          pageNumber: newPageNumber,
        },
      });
    },
    changePerPage(newPerPage) {
      this.perPage = newPerPage;

      let newNumberPages = Math.ceil(this.totalItems / newPerPage);
      if (newNumberPages <= this.pageNumber) {
        this.pageNumber = newNumberPages;
      }

      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          perPage: newPerPage,
          pageNumber: this.pageNumber,
        },
      });
    },
  },
  props: {
    totalItems: {
      type: Number,
      required: true,
    },
    items: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.pagination-button {
  padding: 8px;
  margin: 2px;
  border-radius: 3px;
  font-size: 1em;
  cursor: pointer;
}
.pagination-button.active {
  background-color: #ccc;
  cursor: auto;
}

.pagination-button:disabled {
  cursor: auto;
}

.pagination-row {
  text-align: center;
  padding: 5px 0;
}
</style>
