import { NavLink } from 'react-router-dom'

const HeaderMenu = () => {
    return (
        <nav className='header-menu'>
            <NavLink to='/' end>
                Home
            </NavLink>
            <NavLink to='about'>About Us</NavLink>
            <NavLink to='contacts'>Contacts</NavLink>
        </nav>
    )
}
export default HeaderMenu
