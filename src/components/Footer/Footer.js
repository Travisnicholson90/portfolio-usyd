import { useState, useEffect } from 'react';
import resume from '../../assets/nicholson-resume.docx';

import github from '../../assets/images/github.svg';
import mail from '../../assets/images/mail.svg';
import linkedin from '../../assets/images/linkedin.svg';

const Footer = () => {
const [showName, setShowName] = useState(false);

useEffect(() => {
    const handleShowName = () => {
        if (window.innerWidth > 900) {
            setShowName(true);
        } else {
            setShowName(false);
        }
    }

    window.addEventListener('resize', handleShowName);
    return () => {
        window.removeEventListener('resize', handleShowName);
    }
}, []);

    return (
        <header className='flex px-5 py-8 bg-primary-bg-dark rounded-t-2xl'>
        <nav className='flex w-full items-center justify-center tracking-widest'>
            {showName && (<h1 className="mr-auto overflow-hidden text-center text-xl">Travis Nicholson</h1>)}
              <ul className='flex items-center gap-3 lg:gap-8 text-lg lg:text-2xl tracking-widest lg:text2xl hover:cursor-pointer'>
                <a className='w-full' href='https://github.com/Travisnicholson90'>
                    <img className='w-5' src={github} alt="icon" />
                </a>
                <a  className='w-full' href='#contact'>
                    <img className='w-5' src={mail} alt="icon" />
                </a>
                <a className='w-full' href='https://www.linkedin.com/in/travis-nicholson-91787484/'>
                    <img className='w-5'  src={linkedin} alt="icon" />
                </a>
                <a className='w-full' href={resume} download>
                <li className='hover:text-primary-lightBlue text-primary-lime'>Resume</li>
                </a>
            </ul>
        </nav>
    </header>
    )
}

export default Footer;
