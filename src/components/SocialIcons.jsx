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
                <FaFacebookSquare className='soc-fb' />
            </a>
            <a
                href='https://www.instagram.com/'
                target='_blank'
                rel='noreferrer'>
                <FaInstagramSquare className='soc-insta' />
            </a>
            <a
                href='https://www.linkedin.com/'
                target='_blank'
                rel='noreferrer'>
                <FaLinkedin className='soc-lin' />
            </a>
            <a href='https://github.com/' target='_blank' rel='noreferrer'>
                <FaGithubSquare className='soc-git' />
            </a>
            <a href='https://x.com/' target='_blank' rel='noreferrer'>
                <FaSquareXTwitter className='soc-twitter' />
            </a>
        </div>
    )
}
export default SocialIcons
