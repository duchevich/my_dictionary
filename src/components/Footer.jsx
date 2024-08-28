import FooterMenu from './FooterMenu'
import Logo from './Logo'
import SocialIcons from './SocialIcons'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='cont'>
                <div className='col col-30'>
                    <Logo />
                </div>
                <div className='col col-full'>
                    <FooterMenu />
                </div>
                <div className='col col-30'>
                    <SocialIcons />
                </div>
            </div>
            <div className='cont'>
                <div className='col col-full footer-copy'>
                    duchevich&copy;{new Date().getFullYear()}
                </div>
            </div>
        </footer>
    )
}

export default Footer
