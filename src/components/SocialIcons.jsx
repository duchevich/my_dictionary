import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaGithubSquare,
} from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const SocialIcons = () => {
    return (
        <div className='social'>
            <a
                href='https://www.facebook.com/'
                target='_blank'
                rel='noreferrer'>
                <FaFacebookSquare />
            </a>
            <a
                href='https://www.instagram.com/'
                target='_blank'
                rel='noreferrer'>
                <FaInstagramSquare />
            </a>
            <a
                href='https://www.linkedin.com/'
                target='_blank'
                rel='noreferrer'>
                <FaLinkedin />
            </a>
            <a href='https://github.com/' target='_blank' rel='noreferrer'>
                <FaGithubSquare />
            </a>
            <a href='https://x.com/' target='_blank' rel='noreferrer'>
                <FaSquareXTwitter />
            </a>
        </div>
    )
}
export default SocialIcons
