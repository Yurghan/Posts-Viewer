export default {
  async loadPosts(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    if (!response.ok) {
      const error = new Error(posts.message || 'Failed to fetch');
      throw error;
    }

    context.commit('setPosts', posts);
  },
};
