import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { Dashboard } from './pages/app/dashboard'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'
import { Orders } from './pages/app/orders/orders'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />, // This layout is used for user authenticated routes
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> }
    ],
  },
  {
    path: '/',
    element: <AuthLayout />, // This layout is used for user don't authenticated routes
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
])
