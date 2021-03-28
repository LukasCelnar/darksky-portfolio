import React from 'react';
import './Contact.scss';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact__header'>GET IN TOUCH WITH ME</div>
            <form className='contact__form-form'>
                <div className='contact__form-inputs'>
                    <input className='contact__form-name' name='name' placeholder='Your Name' type='text'/>
                    <input className='contact__form-email' name='email' placeholder='Your Email' type='email' />
                </div>
                <textarea className='contact__form-message' name='message' placeholder='Message' rows='1'>

                </textarea>
                <br />
                <button className='contact__form-submit' type='submit'>GET IN TOUCH</button>
            </form>
           
        </div>
    );
};

export default Contact;