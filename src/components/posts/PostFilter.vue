<template>
  <base-card>
    <h2>Find a post</h2>
    <span class="filter-option">
      <input type="checkbox" id="evenId" checked @change="setFilter" />
      <label for="evenId">Even ID</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="oddId" checked @change="setFilter" />
      <label for="oddId">Odd ID</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        evenId: true,
        oddId: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    },
  },
};
</script>
