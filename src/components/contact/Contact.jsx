import React from 'react'
import "./contact.css"
import { AiOutlineMail } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zv9zy2w', 'template_2mmhvnu', form.current, 'zSHaBACm2bv15S1iX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Aballah.Bahrawi400@gmail.com</h5>
            <a href="mailto:Aballah.Bahrawi400@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Aballah.Bahrawi</h5>
            <a href="https://m.me/abod.craft.33" target='_blank' rel="noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsap</h4>
            <h5>+972598847257</h5>
            <a href="https://api.whatsapp.com/send?phone+972598847257" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea type="message" name='message' rows="7" placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact