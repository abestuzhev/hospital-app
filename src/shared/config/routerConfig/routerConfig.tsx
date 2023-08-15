import { type RouteProps } from 'react-router-dom'
import { Main } from 'pages/Main'
import { About } from 'pages/About'
import { NotFound } from 'pages/NotFound'

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'notFound'
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*'
}

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPath.main,
        element: <Main />
    },
    [AppRoutes.ABOUT]: {
        path: RouterPath.about,
        element: <About />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RouterPath.notFound,
        element: <NotFound />
    }
}
