import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routerConfig } from 'shared/config/routerConfig/routerConfig'
import Loader from 'shared/ui/Loader'
import { classNames } from 'shared/lib/classNames/classNames'

const AppRouter = () => {
    return (
        <div className={classNames('app-content')}>
            <Suspense fallback={<Loader />}>
                <Routes>
                    {Object.values(routerConfig).map(({ element, path }) => {
                        return <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    })}
                </Routes>
            </Suspense>
        </div>

    )
}

export default AppRouter
