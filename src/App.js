import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

const App = () => {
    return (
        <BrowserRouter>
            <div className='App'>
                <Routes>
                    <Route path='/' element={<MainLayout />}>
                        <Route path='/' element={<h1>Home</h1>} />
                        <Route path='about' element={<h1>About</h1>} />
                        <Route path='contacts' element={<h1>Contacts</h1>} />
                        <Route path='terms' element={<h1>Terms</h1>} />
                        <Route path='privacy' element={<h1>Privacy</h1>} />
                        <Route path='copyright' element={<h1>Copyright</h1>} />
                        <Route path='*' element={<h1>404</h1>} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
