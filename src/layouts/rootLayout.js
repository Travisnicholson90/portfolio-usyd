import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import classes from './rootLayout.module.css';
import MobileHeader from '../components/Header/MobileHeader';
import Header from '../components/Header/Header';

const Layout = () => {
    const [mobileNav, setMobileNav] = useState(true);

    const {ref: titleRef, inView: titleInView} = useInView();
    const {ref: aboutRef, inView: aboutInView} = useInView();
    const {ref: contactRef, inView: contactInView} = useInView();
    const {ref: projectsRef, inView: projectsInView} = useInView();
    const {ref: skillsRef, inView: skillsInView} = useInView();

useEffect(() => {
    // if screen is larger than 768px, set mobileNav to false
    if (window.innerWidth > 900) {
        setMobileNav(false);
    } else {
        setMobileNav(true);
    }

    // if screen is resized to larger than 768px, set mobileNav to false
    const handleResize = () => {
        if (window.innerWidth > 900) {
            setMobileNav(false);
        } else {
            setMobileNav(true);
        }

    }
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    }
}, []);


    return (
        <div>
        <div className={`${classes['grid']}`}>
            <div ref={titleRef} className={`relative flex flex-col px-2 gap-4 z-50 ${classes.title} ${titleInView ? `${classes['show-title']}` : `${classes['hide-title']}`}`}>
               {mobileNav ? <MobileHeader /> : <Header /> }
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