export default {
  async loadPosts(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    if (!response.ok) {
      // error
    }

    context.commit('setPosts', posts);
  },
};
