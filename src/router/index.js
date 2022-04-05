import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'
import { useRoute } from 'vue-router'

const Login = () => import('../views/Login.vue')
const HomePage = () => import('../views/HomePage.vue')
const GalleryPage = () => import('../views/GalleryPage.vue')
const DetailPage = () =>  import('../views/DetailPage.vue')
const NotFound = () => import('../views/NotFound.vue')


export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: DetailPage
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/gallery',
            name: 'gallery',
            component: GalleryPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notfound',
            component: NotFound
        }
    ]
})