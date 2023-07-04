import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import classes from './rootLayout.module.css';

const Layout = ({ children }) => {
    const [showNav, setShowNav] = useState(false);

    const {ref: titleRef, inView: titleInView} = useInView();
    const {ref: aboutRef, inView: aboutInView} = useInView();
    const {ref: contactRef, inView: contactInView} = useInView();
    const {ref: projectsRef, inView: projectsInView} = useInView();
    const {ref: skillsRef, inView: skillsInView} = useInView();

    const toggleNav = () => {
        setShowNav(prev => !prev);
    }


    return (
        <div>
        <div className={`${classes['grid']}`}>
            <div ref={titleRef} className={`relative flex flex-col px-2 gap-4 z-50 ${classes.title} ${titleInView ? `${classes['show-title']}` : `${classes['hide-title']}`}`}>
                <div className='flex w-full items-center'>
                    <h1 className="overflow-hidden text-center text-2xl lg:text-5xl">Travis Nicholson</h1>
                    <label className={`ml-auto ${classes.burger}`} onChange={toggleNav} checked={showNav} htmlFor='burger'>
                        <input type="checkbox" id='burger' />
                        <span className='bg-purple-500'></span>
                        <span className='bg-purple-500'></span>
                        <span className='bg-purple-500'></span>
                    </label>
                </div>
                    { showNav && (
                        <nav className='absolute w-full top-40 py-10 md:top-32 lg:top-48 bg-primary-bg-dark backdrop-blur-md rounded-xl'>
                        <ul className='flex flex-col items-center gap-5 text-xl lg:text-2xl mt-5 hover:cursor-pointer'>
                            <li className='hover:text-primary-lightBlue'>About</li>
                            <li className='hover:text-primary-lightBlue'>Blog</li>
                            <li className='hover:text-primary-lightBlue'>projects</li>
                            <li className='hover:text-primary-lightBlue'>Contact</li>
                            <li className='hover:text-primary-lightBlue text-primary-lime'>Resume</li>
                        </ul>
                    </nav>)} 
            </div>
            <div ref={aboutRef} className={` ${classes.about} ${aboutInView ? `${classes['show-about']}` : `${classes['hide-about']}` }`}>
                <About />
            </div>
            <div ref={contactRef} className={`${classes.contact} ${contactInView ? `${classes['show-contact']}` : `${classes['hide-contact']}`}`}>
                <Contact/>
            </div>
            <div ref={skillsRef} className={`${classes.skills} ${skillsInView ? `${classes['show-skills']}` : `${classes['hide-skills']}`}`}> 
                <Skills />
            </div>
            <div ref={projectsRef} className={`${classes.projects} ${projectsInView ? `${classes['show-projects']}` : `${classes['hide-projects']}`}`}>
                <Projects />
            </div>
        </div>
        </div>
    )
};

export default Layout;