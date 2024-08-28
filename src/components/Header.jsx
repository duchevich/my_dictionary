import HeaderMenu from './HeaderMenu'
import Logo from './Logo'

const Header = () => {
    return (
        <header className='header'>
            <div className='container-fluid'>
                <div className='flexbox'>
                    <div className='col col-30'>
                        <Logo />
                    </div>
                    <div className='col col-full'>
                        <HeaderMenu />
                    </div>
                    <div className='col col-30'></div>
                </div>
            </div>
        </header>
    )
}

export default Header
