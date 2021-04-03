import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.scss';

const Contact = () => {
    const onFormSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'darksky-portfolio', e.target, process.env.REACT_APP_EMAILJS_USERID)
            .then(result => {
                if (result.status === 200) {
                    console.log('email sent successfully')
                }
            })
            .catch(err => console.log(err))

        e.target.reset();

    }

    return (
        <div className='contact'>
            <div className='contact__header'>GET IN TOUCH WITH ME</div>
            <form onSubmit={(e) => onFormSubmit(e)} className='contact__form-form' name='contact'>
                <div className='contact__form-inputs'>
                    <input required className='contact__form-name' name='name' placeholder='Your Name' type='text'/>
                    <input required className='contact__form-email' name='email' placeholder='Your Email' type='email' />
                </div>
                <textarea required className='contact__form-message' name='message' placeholder='Message' rows='1'>

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
                    <a href='https://www.facebook.com/profile.php?id=100008529007419'><img src='/images/contact/fb.png' alt='fb' /></a>
                    <a href='https://www.instagram.com/lukas.celnar/'><img src='/images/contact/ig.png' alt='ig' /></a>
                    <a href='https://www.linkedin.com/in/luk%C3%A1%C5%A1-celnar-3362491a6/'><img src='/images/contact/linkedin.png' alt='linkedin' /></a>
                </div>

            </div>
        </div>
    );
};

export default Contact;