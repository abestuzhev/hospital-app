import { type RouteProps } from 'react-router-dom'
import { Main } from 'pages/Main'
import { About } from 'pages/About'

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPath.main,
        element: <Main />
    },
    [AppRoutes.ABOUT]: {
        path: RouterPath.about,
        element: <About />
    }
}
