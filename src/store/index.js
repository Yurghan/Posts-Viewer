import { createStore } from 'vuex';

import postsModule from './modules/posts/index.js';

const store = createStore({
  modules: {
    posts: postsModule,
  },
});

export default store;
