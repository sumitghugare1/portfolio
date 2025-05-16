import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: false
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false });
    
    // Send the email using EmailJS with environment variables
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, 
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY 
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setFormStatus({ submitted: true, submitting: false, error: false });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitted: false, submitting: false, error: false });
      }, 5000);
    })
    .catch((error) => {
      console.error('Email sending failed:', error.text);
      setFormStatus({ submitted: false, submitting: false, error: true });
    });
  };
  
  return (
    <section id="contact" className="contact-section wave-section">
      <h2 className="section-title">Get In <span>Touch</span></h2>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <h3>Location</h3>
            <p>Latur, Maharashtra, India</p>
          </div>
          
          <div className="contact-card">
            <div className="contact-card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <h3>Email</h3>
            <p>sumitghugare3@gmail.com</p>
          </div>
          
          <div className="contact-card">
            <div className="contact-card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"/>
              </svg>
            </div>
            <h3>Phone</h3>
            <p>+91 75592 01449</p>
          </div>
        </div>
        
        <div className="contact-form-container">
          <form className="contact-form" ref={form} onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Your Name" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Your Email" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                placeholder="Subject" 
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Your Message" 
                rows="5" 
                required 
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`submit-btn ${formStatus.submitting ? 'submitting' : ''}`} 
              disabled={formStatus.submitting}
            >
              {formStatus.submitting ? 'Sending...' : 'Send Message'}
            </button>
            {formStatus.submitted && (
              <div className="form-success">
                Your message has been sent successfully!
              </div>
            )}
            {formStatus.error && (
              <div className="form-error">
                There was an error sending your message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
