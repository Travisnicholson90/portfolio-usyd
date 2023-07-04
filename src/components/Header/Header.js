import { useState, useEffect } from 'react';
import resume from '../../assets/nicholson-resume.pdf';

const Header = () => {
    const [showNav, setShowNav] = useState(false);


    useEffect(() => {
        // set navbar to hidden when scrolling down
        const handleScroll = () => {
            if (showNav && window.scrollY > 10) {
                setShowNav(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [showNav]);
    
    const scrollToAbout = () => {
        const aboutPage = document.getElementById('about');
        aboutPage.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToProjects = () => {
        const projectsPage = document.getElementById('projects');
        projectsPage.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        const contactPage = document.getElementById('contact');
        contactPage.scrollIntoView({ behavior: 'smooth' });
    };

    return (
    <header className='flex w-full px-3'>
        <nav className='flex w-full items-center'>
            <h1 className="overflow-hidden text-center text-3xl lg:text-5xl">Travis Nicholson</h1>
              <ul className='ml-auto flex items-center gap-3 lg:gap-8 text-lg lg:text-xl tracking-widest lg:text2xl hover:cursor-pointer'>
                <li onClick={scrollToAbout} className='hover:text-primary-lightBlue'>About</li>
                <a href="https://tech-blog-usyd.herokuapp.com/" target='blank'>
                <li className='hover:text-primary-lightBlue'>Blog</li>
                </a>
                <li onClick={scrollToProjects} className='hover:text-primary-lightBlue'>projects</li>
                <li onClick={scrollToContact} className='hover:text-primary-lightBlue'>Contact</li>
                <a href={resume} download>
                <li className='hover:text-primary-lightBlue text-primary-lime'>Resume</li>
                </a>
            </ul>
        </nav>
    </header>
    )
};

export default Header;