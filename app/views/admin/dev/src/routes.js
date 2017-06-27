import Main from '@pages/Main'
import Articles from '@pages/articles/Article'
import ArticleEdit from '@pages/articles/ArticleEdit'
import ArticleDetail from '@pages/articles/ArticleDetail'
import Category from '@pages/category/Category'
import CategoryEdit from '@pages/category/CategoryEdit'
import Expe from '@pages/experience/Expe'
import Login from '@pages/Login'
import Register from '@pages/Register'
import Software from '@pages/records/Software'
import NodeModule from '@pages/records/NodeModule'
import NodeCategory from '@pages/records/NodeCategory'


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
        component: ArticleEdit
      },
      {
        path: '/home/article/detail',
        component: ArticleDetail
      },
      {
        path: '/home/category',
        exect: true,
        component: Category
      },
      {
        path: '/home/category/edit',
        component: CategoryEdit
      },
      {
        path: '/home/record/soft',
        component: Software
      },
      {
        path: '/home/record/module',
        component: NodeModule
      },
      {
        path: '/home/record/moduleCat',
        component: NodeCategory
      }
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