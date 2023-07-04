import classes from './ProjectsPage.module.css';
import { useInView } from 'react-intersection-observer';

const ProjectsPage = () => {
    const {ref: blogRef, inView: blogInView} = useInView();
    const {ref: jobsRef, inView: jobsInView} = useInView();
    const {ref: plannerRef, inView: plannerInView} = useInView();
    const {ref: shoesRef, inView: shoesInView} = useInView();


  return (
<div className={`${classes.container}`}>
    <div className={`${classes.main}`}>
        <div ref={blogRef} className={`overflow-hidden p-4 ${classes.blog} ${blogInView ? `${classes['show-blog']}` : `${classes['hide-blog']}`}`}>
            <div className={`${classes.wrapper} bg-primary-purple`}>
                <div className={`${classes.links} px-8 text-md lg:text-2xl  bg-primary-purple`}>
                    <a className='hover:cursor-pointer hover:opacity-70' href="/">
                    <p className='text-primary-pink'>GitHub</p>
                    </a>
                    <a className='hover:cursor-pointer' href="https://tech-blog-usyd.herokuapp.com/" target='blank' >
                    <p className='text-primary-pink'>Website</p>
                    </a>
                </div>
                <div className={`${classes.title}  bg-primary-purple text-primary-Pink`}>
                    <h2 className='overflow-hidden text-2xl lg:text-5xl text-center'>CMS Style Tech Blog</h2>
                </div>
                <div className={`${classes.tech} bg-primary-purple`}>
                <span className={`${classes.span} text-lg lg:text-2xl  bg-primary-purple`}>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>Node</span>
                    <span>Express</span>
                    <span>Authentication</span>
                    <span>ORM</span>
                    <span>Sequelize</span>
                </span>
                <span className={`${classes.span} text-lg lg:text-2xl  bg-primary-purple`}>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>Node</span>
                    <span>Express</span>
                    <span>Authentication</span>
                    <span>ORM</span>
                    <span>Sequelize</span>
                </span>
            </div>
            </div>
        </div>

        <div ref={jobsRef} className={`overflow-hidden p-4  ${classes.jobs} bg-primary-darkGreen ${jobsInView ? `${classes['show-jobs']}` : `${classes['hide-jobs']}`}`}>
        <div className={`${classes.wrapper} bg-primary-darkGreen`}>
                <div className={`${classes.links} px-8 text-md lg:text-2xl  bg-primary-darkGreen`}>
                    <a className='hover:cursor-pointer' href="/">
                    <p className='text-primary-lime'>GitHub</p>
                    </a>
                    <a className='hover:cursor-pointer' href="/">
                    <p className='text-primary-lime'>Website</p>
                    </a>
                </div>
                <div className={`${classes.title}  bg-primary-darkGreen text-primary-Pink`}>
                    <h2 className='overflow-hidden text-2xl lg:text-5xl text-center'>Jobs Board</h2>
                </div>
                <div className={`${classes.tech} bg-primary-darkGreen`}>
                <span className={`${classes.span} text-lg lg:text-2xl  bg-primary-darkGreen`}>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>Node</span>
                    <span>Express</span>
                    <span>Authentication</span>
                    <span>ORM</span>
                    <span>Sequelize</span>
                </span>
                <span className={`${classes.span} text-lg lg:text-2xl  bg-primary-darkGreen`}>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>Node</span>
                    <span>Express</span>
                    <span>Authentication</span>
                    <span>ORM</span>
                    <span>Sequelize</span>
                </span>
            </div>
            </div>
        </div>

        <div ref={plannerRef} className={`overflow-hidden p-4  ${classes.shoes} bg-primary-grayishWhite ${plannerInView ? `${classes['show-planner']}` : `${classes['hide-planner']}`}`}>
        <div className={`${classes.wrapper} bg-primary-grayishWhite`}>
                <div className={`${classes.links} px-8 text-md lg:text-2xl  bg-primary-grayishWhite`}>
                    <a className='hover:cursor-pointer' href="/">
                    <p className='text-primary-red'>GitHub</p>
                    </a>
                    <a className='hover:cursor-pointer' href="/">
                    <p className='text-primary-red'>Website</p>
                    </a>
                </div>
                <div className={`${classes.title}  bg-primary-grayishWhite text-primary-brightPeach`}>
                    <h2 className='overflow-hidden text-2xl lg:text-5xl text-center'>Personal Planner</h2>
                </div>
                <div className={`${classes.tech} bg-primary-grayishWhite`}>
                <span className={`${classes.span} text-lg text-primary-peach lg:text-2xl  bg-primary-grayishWhite`}>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>Node</span>
                    <span>Express</span>
                    <span>Authentication</span>
                    <span>ORM</span>
                    <span>Sequelize</span>
                </span>
                <span className={`${classes.span} text-lg text-primary-peach lg:text-2xl  bg-primary-grayishWhite`}>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>Node</span>
                    <span>Express</span>
                    <span>Authentication</span>
                    <span>ORM</span>
                    <span>Sequelize</span>
                </span>
            </div>
            </div>
    </div>
    <div ref={shoesRef} className={`overflow-hidden p-4  ${classes.planner} bg-primary-darkBlue ${shoesInView ? `${classes['show-shoes']}` : `${classes['hide-shoes']}`}`}>
        <div className={`${classes.wrapper} bg-primary-darkBlue`}>
                <div className={`${classes.links} px-8 text-md lg:text-2xl  bg-primary-darkBlue`}>
                <a className='hover:cursor-pointer' href="/">
                    <p className='text-primary-lightBlue'>GitHub</p>
                    </a>
                    <a className='hover:cursor-pointer' href="/">
                    <p className='text-primary-lightBlue'>Website</p>
                    </a>
                </div>
                <div className={`${classes.title}  bg-primary-darkBlue text-primary-Pink`}>
                    <h2 className='overflow-hidden text-2xl lg:text-5xl text-center'>Web Dev Quiz</h2>
                </div>
                <div className={`${classes.tech} bg-primary-darkBlue`}>
                <span className={`${classes.span} text-lg lg:text-2xl  bg-primary-darkBlue`}>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>MongoDB</span>
                    <span>Mongoose</span>
                    <span>Authentication</span>
                </span>
                <span className={`${classes.span} text-lg lg:text-2xl  bg-primary-darkBlue`}>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>MongoDB</span>
                    <span>Mongoose</span>
                    <span>Authentication</span>
                </span>
            </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default ProjectsPage;
