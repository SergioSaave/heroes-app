import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, MarvelPage, HeroPage, SearchPage } from "../pages"

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path='marvel' element={<MarvelPage />} />
                    <Route path='dc' element={<DcPage />} />

                    <Route path='hero' element={<HeroPage />} />
                    <Route path='search' element={<SearchPage />} />

                    {/* Search, Hero by id */}

                    <Route path="/*" element={<Navigate to={'/marvel'} />}></Route>
                </Routes>
            </div>

        </>
    )
}
