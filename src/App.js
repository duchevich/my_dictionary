import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Front from './pages/Front'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Copyright from './pages/Copyright'
import NotFound from './pages/NotFound'

const App = () => {
    return (
        <BrowserRouter>
            <div className='App'>
                <Routes>
                    <Route path='/' element={<MainLayout />}>
                        <Route path='/' element={<Front />} />
                        <Route path='about' element={<About />} />
                        <Route path='contacts' element={<Contacts />} />
                        <Route path='terms' element={<Terms />} />
                        <Route path='privacy' element={<Privacy />} />
                        <Route path='copyright' element={<Copyright />} />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
