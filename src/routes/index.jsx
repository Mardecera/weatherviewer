import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, PageNotFound } from '../views'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />}></Route>
                <Route path={"/*"} status={404} element={<PageNotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
