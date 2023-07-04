import classes from './Contact.module.css';
import github from '../../assets/images/github.svg';
import mail from '../../assets/images/mail.svg';
import linkedin from '../../assets/images/linkedin.svg';
const Contact = () => {
    const scrollToContact = () => {
        const contact = document.getElementById('contact');
        contact.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={`${classes.contact} bg-primary-darkGreen text-2xl lg:text-5xl hover:cursor-pointer`}>
            <h2 className={`me-3 overflow-hidden ${classes.heading} bg-primary-darkGreen text-lime`}>Contact</h2>
            <div className={`${classes.icons} bg-primary-darkGreen`}>
                <a className='w-full' href='https://github.com/Travisnicholson90'>
                    <img className={`w-8 lg:w-10 ${classes.icon}`} src={github} alt="icon" />
                </a>
                <a onClick={scrollToContact} className='w-full' href='#contact'>
                    <img className={`w-8 lg:w-10 ${classes.icon}`} src={mail} alt="icon" />
                </a>
                <a className='w-full' href='https://www.linkedin.com/in/travis-nicholson-91787484/'>
                    <img className={`w-8 lg:w-10 ${classes.icon}`} src={linkedin} alt="icon" />
                </a>
            </div>
        </div>
    )
};

export default Contact;