import { Link } from 'react-router-dom'
import HeaderMenu from './HeaderMenu'
import Logo from './Logo'

const Header = () => {
    return (
        <header className='header'>
            <div className='container-fluid'>
                <div className='flexbox'>
                    <div className='col col-20'>
                        <Logo />
                    </div>
                    <div className='col col-full'>
                        <HeaderMenu />
                    </div>
                    <div className='col col-20'>
                        <Link className='btn btn-orange' to='login'>
                            Log In
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
