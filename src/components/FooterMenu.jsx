import { NavLink } from 'react-router-dom'

const FooterMenu = () => {
    return (
        <nav className='footer-menu'>
            <NavLink to='about'>About Us</NavLink>
            <NavLink to='contacts'>Contacts</NavLink>
            <NavLink to='terms'>Terms of Service</NavLink>
            <NavLink to='privacy'>Privacy Policy</NavLink>
            <NavLink to='copyright'>Copyright Policy</NavLink>
        </nav>
    )
}
export default FooterMenu
