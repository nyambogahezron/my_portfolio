import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const socialLinks = [
    { platform: 'facebook', href: '#', Icon: FaFacebook },
    { platform: 'twitter', href: '#', Icon: FaTwitter },
    { platform: 'linkedin', href: '#', Icon: FaLinkedin },
    { platform: 'instagram', href: '#', Icon: FaInstagram },
    { platform: 'github', href: '#', Icon: FaGithub },
];

const SocialLinks = () => {
    return (
        <ul className="social-links">
            {socialLinks.map(link => (
                <li key={link.platform}>
                    <a href={link.href}><link.Icon /></a>
                </li>
            ))}
        </ul>
    );
}

export default SocialLinks;