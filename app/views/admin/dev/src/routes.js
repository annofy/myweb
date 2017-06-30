import Main from '@pages/Main'
import Articles from '@pages/articles/Article'
import ArticleEdit from '@pages/articles/ArticleEdit'
import ArticleDetail from '@pages/articles/ArticleDetail'
import Category from '@pages/category/Category'
import CategoryEdit from '@pages/category/CategoryEdit'
import Entity from '@pages/category/Entity'
import Expe from '@pages/experience/Expe'
import Login from '@pages/Login'
import Register from '@pages/Register'
import Software from '@pages/records/Software'
import NodeModule from '@pages/records/NodeModule'


export default [
  {
    path: '/',
    redirect: '/login',
    exect: true
  },
  {
    path: '/home',
    component: Main,
    routes: [
      {
        path: '/home/article',
        exect: true,
        component: Articles
      },
      {
        path: '/home/article/edit',
        exect: true,
        component: ArticleEdit
      },
      {
        path: '/home/article/detail',
        exect: true,
        component: ArticleDetail
      },
      {
        path: '/home/category',
        exect: true,
        component: Category
      },
      {
        path: '/home/entity',
        exect: true,
        component: Entity
      },
      {
        path: '/home/category/edit',
        exect: true,
        component: CategoryEdit
      },
      {
        path: '/home/record/soft',
        exect: true,
        component: Software
      },
      {
        path: '/home/record/module',
        exect: true,
        component: NodeModule
      },
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  }
]