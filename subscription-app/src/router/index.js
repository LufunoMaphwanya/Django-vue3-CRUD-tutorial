import { createRouter, createWebHistory } from "vue-router";
import Create from '../components/Create';
import Edit from '../components/Edit';
import Show from '../components/Show';
import Index from '../components/Index';

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/create',
        name: 'create',
        component: Create
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: Edit,
        props: true
    },
    {
        path: '/show/:id',
        name: 'show',
        component: Show,
        props: true
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})

