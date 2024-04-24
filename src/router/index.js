import HomePage from "@/views/HomePage.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes:[
        {name:'home',path:'/',component:HomePage},
    ]
})

export default router