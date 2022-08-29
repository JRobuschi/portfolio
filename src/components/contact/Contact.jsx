import React, { useRef } from 'react';
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wlbn3vi', 'template_ujjngxb', form.current, 'qyvuttAreLZRv17mA');

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>jrobuschi5@gmail.com</h5>
            <a href="mailto:jrobuschi@gmail.com" target='_blank' without rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className='contact__option-icon' />
            <h4>Linkedin</h4>
            <h5>Juan Cruz Robuschi</h5>
            <a href="https://www.linkedin.com/in/juan-cruz-robuschi/" target='_blank' without rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+5492235420394</h5>
            <a href="https://wa.me/+542235420394" target='_blank' without rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input name="name" type="text" placeholder='Your Full Name or Name Company' required />
          <input name="email" type="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Messsage' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact