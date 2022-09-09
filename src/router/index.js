import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import Dashboard from '../views/Dashboard.vue'
import VuetifyView from '../views/VuetifyView.vue'
import Quiz from '../views/Quiz.vue'
import AboutQuiz from '../views/AboutProj.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView
    },
    {
      path: '/basicMath',
      name: 'basicMath',
      component: BasicMathView
    },
    {
      path: '/vuetify',
      name: 'vuetify',
      component: VuetifyView
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: Quiz
    },
    {
      path: '/abtquiz',
      name: 'abtquiz',
      component: AboutQuiz
    },

  ]
})

export default router
