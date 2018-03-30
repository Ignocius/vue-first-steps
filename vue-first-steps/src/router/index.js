import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BasicExample from '@/components/basic/Basicexample'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hellovue',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/first',
      name: 'BasicExample',
      component: BasicExample
    }
  ]
})
