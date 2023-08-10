import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { type RouteProps } from 'react-router-dom'

export enum AppRouter {
  MAIN = 'main',
  ABOUT = 'about',
  NOTFOUND = '*',
}

export const RoutePath: Record<AppRouter, string> = {
  [AppRouter.MAIN]: '/',
  [AppRouter.ABOUT]: '/about',
  [AppRouter.NOTFOUND]: '*'
}

export const RouteConfig: Record<AppRouter, RouteProps> = {
  [AppRouter.MAIN]: {
    path: '/',
    element: <MainPage />
  },
  [AppRouter.ABOUT]: {
    path: '/about',
    element: <AboutPage />
  },
  [AppRouter.NOTFOUND]: {
    path: '*',
    element: <NotFoundPage />
  }
}
