import classes from './Projects.module.css';

const Projects = () => {
    return (
        <div className={`${classes.projects} bg-primary-purple text-3xl lg:text-6xl`}>
        <h2 className={`${classes.heading} overflow-hidden text-primary-Pink text-2xl lg:text-5xl`}>Projects</h2>
        <div className={`${classes.box}`}>
            <span className={`${classes.span}`}>
            <span>CMS&nbsp;Tech&nbsp;Blog&nbsp;</span>
            <span>Local&nbsp;Jobs&nbsp;Board&nbsp;</span>
            <span>Web&nbsp;Dev&nbsp;Quiz&nbsp;</span>
            <span>Planner&nbsp;Application&nbsp;</span>
            </span>
        </div>
        <div className={`${classes.box}`}>
            <span className={`${classes.span}`}>
            <span>CMS&nbsp;Tech&nbsp;Blog&nbsp;</span>
            <span>Local&nbsp;Jobs&nbsp;Board&nbsp;</span>
            <span>Web&nbsp;Dev&nbsp;Quiz&nbsp;</span>
            <span>Planner&nbsp;Application&nbsp;</span>
            </span>
        </div>
        
        </div>
        )
};

export default Projects;