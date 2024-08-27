import FooterMenu from './FooterMenu'
import Logo from './Logo'
import SocialIcons from './SocialIcons'

const Footer = () => {
    return (
        <footer>
            <div className='cont'>
                <Logo />
                <FooterMenu />
                <SocialIcons />
            </div>
            <div className='cont'>
                <div>&copy;2024</div>
            </div>
        </footer>
    )
}

export default Footer
