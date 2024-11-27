import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Main from './layout/Main'
import Home from './pages/Home/Home'
import Images from './pages/Images/Images'
import Videos from './pages/Videos/Videos'

function App({ children }) {
  const router = createBrowserRouter([
    {path: '/', element: <Main />, children: [
      {path: '/', element: <Home />},
      {path: '/images', element: <Images />},
      {path: '/videos', element: <Videos />}
    ]}
  ])
  return (
    <RouterProvider router={router}>{children}</RouterProvider>
  )
}

export default App
