import { useState } from 'react';
import classes from './Header.module.css'

const NavToggle = () => {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(prev => !prev);
    }


    return (
        <header className='flex flex-col p-3 relative'>
            <div className='flex items-center justify-between'>
                <h1 className='border-2 border-purple-500 rounded-2xl p-2 tracking-widest'>TN</h1>
                <label className={classes.burger} htmlFor='burger'>
                    <input type="checkbox" checked={showNav} onChange={toggleNav} id='burger' />
                    <span className='bg-purple-500'></span>
                    <span className='bg-purple-500'></span>
                    <span className='bg-purple-500'></span>
                    </label>
            </div>
                { showNav && (<nav className='absolute top-20 backdrop-blur-m'>
                    <ul className='flex flex-col gap-2 text-lg ms-5'>
                        <li>Blog</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </nav> )}
        </header>
    )
};

export default NavToggle;