import classes from './About.module.css';

const About = () => {
    return (
    <div className={`${classes.container} bg-primary-darkBlue text-3xl lg:text-6xl overflow-hidden hover:cursor-pointer`}>
        <div className={`${classes['rotating-box']}`}>
            <div className={`${classes['rotating-box__square']}`}></div>
            <div className={`${classes['rotating-box__circle']}`}></div>
            <div className={`${classes['rotating-box__triangle']}`}></div>
            <div className={`${classes['rotating-box__pentagon']}`}></div>
        </div>
            <h2 className={`${classes.heading} overflow-hidden text-2xl md:text-3xl lg:text-7xl`}>About Me..</h2>
        <div className={`${classes.box} bg-primary-darkBlue`}>
        <span className={`${classes.span} text-white`}> 
        <span>Hi, &nbsp; I&lsquo;m&nbsp;Travis&nbsp; <i className={`${classes.emoji}`}>👋</i></span>
        <span>Fullstack&nbsp; Developer</span>
        <span>Sydney,&nbsp; Australia</span>
        <span>I&nbsp; am&nbsp; passionate&nbsp; about&nbsp; creating&nbsp; visually&nbsp; appealing&nbsp; and&nbsp; intuitive&nbsp; UI/UX</span>
        </span>
        <span className={`${classes.span} text-white`}> 
        <span>Hi, &nbsp; I&lsquo;m&nbsp; Travis&nbsp; <i className={`${classes.emoji}`}>👋</i></span>
        <span>Fullstack&nbsp; Developer</span>
        <span>Sydney,&nbsp; Australia</span>
        <span>I&nbsp; am&nbsp; passionate&nbsp; about&nbsp; creating&nbsp; visually&nbsp; appealing&nbsp; and&nbsp; intuitive&nbsp; UI/UX</span>
        </span>
        </div>
    </div>
    )
}

export default About;