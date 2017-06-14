import Articles from '@pages/articles/Article'
import ArticleEdit from '@pages/articles/ArticleEdit'
import Category from '@pages/category/Category'
import CategoryEdit from '@pages/category/CategoryEdit'
import Expe from '@pages/experience/Expe'
import Login from '@pages/Login'
export default [
  {
    path: '/',
  },
  // {
  //   path: '/login',
  //   exect: true,
  //   component: Login
  // },
  {
    path: '/article',
    component: Articles
  },
  {
    path: '/articleEdit',
    component: ArticleEdit
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/categoryEdit',
    component: CategoryEdit
  },
  {
    path: '/experience',
    component: Expe
  }
]