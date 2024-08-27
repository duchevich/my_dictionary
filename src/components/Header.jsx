import HeaderMenu from './HeaderMenu'
import Logo from './Logo'

const Header = () => {
    return (
        <header>
            <div className='cont'>
                <Logo />
                <HeaderMenu />
            </div>
        </header>
    )
}

export default Header
