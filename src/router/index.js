
import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import index from 'components/index'
import signin from 'components/signin';
import signup from 'components/signup';
import dashboard from 'components/dashboard';
import leftbar from 'components/left-bar';
import board from 'components/board';
import additem from 'components/additem';

Vue.use(VueResource)
Vue.use(Router)

//setting up routing and matching routes to components

export default new Router(
{
  routes: [
    {
      path: '/',
      component: index,

      children:
      [
        {
          path: '/',
          name: 'signin',
          component: signin
        },
        {
          path: '/signup',
          name: 'signup',
          component: signup
        }
      ]
    },
    {
      path: '/home/',
      name: 'dashboard',
      component: dashboard,

      children: 
      [
        {
          path: '/home',
          name: 'board',
          component: board,
        },
        {
          path: '/home/add_item',
          name: 'additem',
          component: additem,
        }
      ]
    }
  ]
})
