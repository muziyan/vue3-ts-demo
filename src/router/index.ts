import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const importPage = (directory:string):() => Promise<any> => ()=> import(`../pages/${directory}/index.vue`)

const routes:RouteRecordRaw[] = [
  {
    "name":"login",
    "path":"/login",
    component:()=> import("../pages/Login/index.vue")
  },
  {
    "name":"home",
    "path":"/home",
    component:()=>import("../pages/Home/index.vue"),
    children:[
      {
        "name":"/home-page",
        "path":"",
        component: importPage("Login")
      }
    ]
  }
];


const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router