import { Routes, Route } from "react-router-dom"

import { HeroesRoutes } from "../heroes"
import { LoginPage } from "../auth"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoutes } from "./PublicRoutes"

export const AppRouter = () => {
    return (
        <>

            <Routes>

                {/* <Route path='login' element={<LoginPage />} /> */}

                <Route path="/login" element={
                // <Route path="login/*" element={
                    <PublicRoutes>
                        <LoginPage />
                        {/* <Routes>
                            <Route path="/*" element={<LoginPage />} />
                        </Routes> */}
                    </PublicRoutes>
                }
                />

                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />

                {/* <Route path='/*' element={<HeroesRoutes />} /> */}

            </Routes>
        </>
    )
}
