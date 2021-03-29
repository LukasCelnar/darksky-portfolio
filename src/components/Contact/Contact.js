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

            <div className='contact__others'>

                <div className='contact__others-header'>Or you can use one of these</div>

                <div className='contact__others-container'>
                    <div className='contact__others-icon-container'>
                        <img className='contact__others-icon' src='/images/contact/email.png' alt='email' />
                        <div>celnar.lukas@gmail.com</div>
                    </div>
                    <div className='contact__others-line'></div>
                    <div className='contact__others-icon-container'>
                        <img className='contact__others-icon' src='/images/contact/phone.png' alt='mobile' />
                        <div>702 037 039</div>
                    </div>
                </div>

                <div className='contact__others-socials'>
                    <a href=''><img src='/images/contact/fb.png' alt='fb' /></a>
                    <a href=''><img src='/images/contact/ig.png' alt='ig' /></a>
                    <a href=''><img src='/images/contact/linkedin.png' alt='linkedin' /></a>
                </div>

            </div>
        </div>
    );
};

export default Contact;