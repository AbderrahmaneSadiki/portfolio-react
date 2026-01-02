import React, { useRef, useState } from 'react';
import './Contact.css';
import contactImg from "./img/contact.jpeg";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null); // null = no message yet

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    emailjs.sendForm(
      'service_iu68zwa',    
      'template_lk9h5v2',   
      form.current,
      'VVfXFYams_Zs6cCiS'    
    )
    .then((result) => {
      console.log(result.text);
      setSuccess(true);
      e.target.reset();
      setLoading(false);
    }, (error) => {
      console.log(error.text);
      setSuccess(false);
      setLoading(false);
    });
  };

  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Hire Me.</h1>
              <p className="hire__text white">I am available for freelance work. Connect with me via phone:</p>
              <p className="hire__text white">
                <strong>+212 646834292</strong> or email <strong>Abderrahmanee.sadiki@gmail.com</strong>
              </p>
            </div>
            <div className="input__box">
              <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" className="contact name" placeholder="Your name *" required />
                <input type="email" name="email" className="contact email" placeholder="Your Email *" required />
                <input type="text" name="subject" className="contact subject" placeholder="Write a Subject" />
                <textarea name="message" id="message" placeholder="Write Your message" required></textarea>
                <button 
                  className="btn contact pointer" 
                  type="submit" 
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>

              {success === true && (
                <p style={{ color: 'green', marginTop: '10px' }}>Message sent successfully!</p>
              )}
              {success === false && (
                <p style={{ color: 'red', marginTop: '10px' }}>Failed to send message. Try again.</p>
              )}
            </div>
          </div>
        </div>
        <div className="col__2">
          <img src={contactImg} alt="" className="contact__img" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
