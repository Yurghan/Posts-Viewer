import { createRouter, createWebHistory } from 'vue-router';

import PostDetail from './pages/posts/PostDetail.vue';
import PostsList from './pages/posts/PostsList.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/posts' },
    { path: '/posts', component: PostsList },
    { path: `/posts/:id`, component: PostDetail, props: true },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
