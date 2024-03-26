import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Community from './Community'
import Stories from './Stories'
import Shop from './Shop'
import Feedback from './Feedback'
import './global.css'

import Tagline from './homepageFiles/Tagline'
import UserLogin from './homepageFiles/UserLogin'


const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />,
            children: [
              {
                path: "/user",
                element: <UserLogin />
                
              }
            ]
          },
          {
            path: "/community",
            element:<Community/>
          },
          {
            path: "/stories",
            element:<Stories/>
          },
          {
            path: "/shop",
            element:<Shop/>
          },
          {
            path: "/feedback",
            element:<Feedback/>
          }

        ]
        
      
    }
  ]
)

  return (
    <>
      <Tagline className="tag"/>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
