import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { i18nRouteMiddleware } from '@/i18n/translation'

const router = createRouter({
    scrollBehavior: () => ({ top: 0 }),
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:locale?',
            component: RouterView,
            beforeEnter: i18nRouteMiddleware,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: HomeView,
                },
                {
                    path: 'about',
                    name: 'about',
                    component: () => import('@/views/AboutView.vue'),
                },
                {
                    path: 'projects',
                    name: 'projects',
                    component: () => import('@/views/ProjectView.vue'),
                },
                {
                    path: 'project/:id',
                    name: 'projectDetails',
                    component: () => import('@/views/ProjectDetailView.vue'),
                },
                {
                    path: ':pathMatch(.*)*',
                    name: 'notFound',
                    component: () => import('@/views/notFoundView.vue'),
                },
            ],
        },
    ],
})

export default router
