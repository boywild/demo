import App from '../App'
import Home from '../view/home'
import Item from '../view/item'
import Score from '../view/score'

export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/item',
        component: Item
      },
      {
        path: '/score',
        component: Score
      }
    ]
  }
]
