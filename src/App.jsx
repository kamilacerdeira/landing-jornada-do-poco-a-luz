import './styles/global.scss'
import React, { Suspense } from 'react'
const Routes = React.lazy(() => import('./Routes'))

export function App() {
    return (
        <Suspense fallback={<div></div>}>
            <Routes />
        </Suspense>
    )
}