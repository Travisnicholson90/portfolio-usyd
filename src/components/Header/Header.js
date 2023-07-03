import NavToggle from './NavToggle';
import { useState, useEffect } from 'react';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 900);
        }
        // Add event listener fro window resize
        window.addEventListener('resize', handleResize);

       handleResize() 

       // Remove event listener on cleanup
       return () => {
              window.removeEventListener('resize', handleResize);
         }
    }, []);


   
    return (
        <div>
           {isMobile ? <NavToggle /> : <h1>Travis Nicholson</h1>}
        </div>
    )
};

export default Header;