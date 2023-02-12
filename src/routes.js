import {createRouter, createWebHistory} from "vue-router";
import homePage from "./components/HomePage.vue";
import filter from "@/components/Filter.vue";
import updateTodo from "@/components/updateTodo.vue";
import addTodo from "@/components/addTodo.vue";
import notFound from "@/components/notFound.vue";

const routes = [
    {
        name: 'homepage',
        path: '/homePage',
        component: homePage,
    },

    {
        name: 'addTodo',
        path: '/addTodo',
        component: addTodo,
    },
    {
        name: 'updateTodo',
        path: '/updateTodo/:id',
        component: updateTodo,
    },
    {
        name: 'notfound',
        path:'/:notFound(.*)',
        component: notFound
    },
    {
        name:'filter',
        path:'/filter',
        component: filter

    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router