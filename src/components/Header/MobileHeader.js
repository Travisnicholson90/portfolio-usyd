import { useState, useEffect } from 'react';
import classes from '../../layouts/rootLayout.module.css';
import resume from '../../assets/nicholson-resume.pdf';

const MobileHeader = () => {
    const [showNav, setShowNav] = useState(false);
    const toggleNav = () => {
        setShowNav(prev => !prev);        
    }


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
    <div className='flex w-full'>
        <div className='flex w-full items-center justify-between'>
        <h1 className="overflow-hidden text-center text-2xl lg:text-5xl">Travis Nicholson</h1>
        <label className={`ml-auto ${classes.burger}`} onChange={toggleNav} htmlFor='burger'>
            <input type="checkbox" id='burger' />
            <span className='bg-purple-500'></span>
            <span className='bg-purple-500'></span>
            <span className='bg-purple-500'></span>
        </label> 
    </div>
        { showNav && (
            <nav className='absolute w-full left-0 top-24 py-10 lg:top-48 bg-primary-bg-dark backdrop-blur-md rounded-xl'>
            <ul className='flex flex-col items-center gap-5 text-xl lg:text-2xl mt-5 hover:cursor-pointer'>
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
        </nav>)} 
    </div>
    )
};

export default MobileHeader;