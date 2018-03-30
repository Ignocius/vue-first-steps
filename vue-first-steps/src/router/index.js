import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BasicExample from '@/components/basic/Basicexample'
import SecondExample from '@/components/basic/SecondExample'

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
    },
    {
      path: '/second',
      name: 'SecondExample',
      component: SecondExample
    }
  ]
})
