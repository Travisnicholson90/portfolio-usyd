import { useForm } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';
import classes from './Form.module.css';


const Form = ({ scrollToContact }) => {
const form = useForm();
const { register, handleSubmit, formState } = form;
const { errors } = formState;

const {ref: nameRef, inView: nameInView } = useInView();
const {ref: emailRef, inView: emailInView } = useInView();
const {ref: textRef, inView: textInView } = useInView();
const {ref: btnRef, inView: btnInView } = useInView();

const onSubmit = async (data) => {
    console.log(data);
    const response = await fetch('https://portfolio-api-tp7v.onrender.com/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      console.log('success');
    } else {
      console.log('error');
    }
  };

    return (
<div className={`${classes.wrapper}`}>
    <div className={`${classes.container} w-4/5 lg:w-2/3 mx-auto`}>
        <h2 className={`text-primary-lightBlue text-6xl lg:text-7xl overflow-hidden`}>Say Hi</h2>
        <form scrollToContact={scrollToContact} id='contact' onSubmit={handleSubmit(onSubmit)} className={`text-lg lg:text-xl ${classes['form-container']}`} noValidate >

            <div ref={nameRef} className={`${classes['form-name']} bg-primary-purple relative ${nameInView ? `${classes['show-name']}` : `${classes['hide-name']}`}`}>
            <input placeholder='Name' type="text" id='name' name='name' 
            {...register('name', {
                required: 'Name is required',
            })}/>
            <p className='absolute'>{errors.name?.message}</p>
            </div>

            <div ref={emailRef} className={`${classes['form-email']} bg-primary-darkGreen ${emailInView ? `${classes['show-email']}` : `${classes['hide-email']}`}`}>
            <input placeholder='Email' type="email" id='email' name='email' 
            {...register('email', {
                required: 'Email is required',
                pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Invalid Email',
                },
            })} />
            <p className='absolute'>{errors.email?.message}</p>
            </div>

            <div ref={textRef} className={`${classes['form-message']} bg-primary-grayishWhite ${textInView ? `${classes['show-text']}` : `${classes['hide-text']}`}`}>
            <textarea className='text-lg lg:text-2xl' placeholder='Message' name="message" id="message" 
            {...register('message', {
                required: 'Message is required',
            })} 
            cols="20" rows="10"></textarea>
            <p className='absolute text-primary-red'>{errors.message?.message}</p>
            </div>
            <button ref={btnRef} className={`${classes.btn} bg-primary-darkBlue text-primary-lightBlue text-xl lg:text-2xl uppercase tracking-wider font-bold ${btnInView ? `${classes['show-btn']}` : `${classes['hide-btn']}`}`}>Submit</button>
        </form>
    </div>
</div>
    )
};

export default Form;