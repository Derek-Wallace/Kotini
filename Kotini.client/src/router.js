import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: loadPage('LandingPage')
  },
  {
    path: '/home',
    name: 'Home',
    component: loadPage('HomePage'),
    beforeEnter: authGuard

  },
  {
    path: '/sessions/:id',
    name: 'Session',
    component: loadPage('SessionPage'),
    beforeEnter: authGuard
  },
  {
    path: '/game/:id',
    name: 'Game',
    component: loadPage('GamePage'),
    beforeEnter: authGuard
  },
  {
    path: '/leaderboards',
    name: 'Leaderboard',
    component: loadPage('LeaderboardsPage'),
    beforeEnter: authGuard

  },
  {
    path: '/help',
    name: 'Help',
    component: loadPage('HelpPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
