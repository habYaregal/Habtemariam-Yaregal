import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

function App() {

  const router= createBrowserRouter([
    {
      path:'/',
      element:<Menu/>
    },
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/contact',
      element:<Contact/>
    },
    {
      path:'/projects',
      element:<Projects/>
    },
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
