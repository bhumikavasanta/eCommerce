import React from 'react';
import './styles.css';
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <section className='contact'>
      <h2>
        Contact Page
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241132.78121607832!2d72.83506111640625!3d19.208314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9b14d80b78b%3A0x1361c3d8da05d3a9!2sMyntra%20Office!5e0!3m2!1sen!2sin!4v1703528693434!5m2!1sen!2sin"
        width="90%"
        height="450"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xrgnzvzv" method="post" className='contact-inputs'>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={isAuthenticated ? user.name : ''}
              required
              // autoComplete='off'
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={isAuthenticated ? user.email : ''}
              required
              // value=""
            />
            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              placeholder='Enter Your Message'
            />
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact