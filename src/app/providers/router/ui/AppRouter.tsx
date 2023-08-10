import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RouteConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

const AppRouter = () => {
  return (
    <Routes>
      {Object.values(RouteConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">{element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  )
}

export default AppRouter
