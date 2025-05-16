import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Product Manager at TechCorp",
      image: "/placeholder.jpg", // Replace with actual image
      text: "John's full-stack expertise was instrumental in delivering our product on time. His ability to handle both frontend and backend development streamlined our development process significantly."
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO at StartupX",
      image: "/placeholder.jpg", // Replace with actual image
      text: "We hired John to overhaul our legacy system, and the results exceeded our expectations. His deep understanding of modern development practices and attention to detail made a huge difference."
    },
    {
      id: 3,
      name: "Emma Davis",
      position: "Founder at CreativeDesign",
      image: "/placeholder.jpg", // Replace with actual image
      text: "Working with John on our e-commerce platform was a fantastic experience. He translated our vision into reality and added valuable insights that improved the final product."
    }
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };
    return (
    <section id="testimonials" className="testimonials-section wave-section">
      <div className="container">
        <h2 className="section-title"><span>Testimonials</span></h2>
        
        <div className="testimonials-container">
          <div className="testimonial-controls">
            <button className="testimonial-control prev" onClick={prevTestimonial}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
          </div>
          
          <div className="testimonials-wrapper" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div className="testimonial-item" key={testimonial.id}>
                <div className="testimonial-content">
                  <div className="testimonial-text">
                    <svg className="quote-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"/>
                    </svg>
                    <p>{testimonial.text}</p>
                  </div>
                  <div className="testimonial-author">
                    <div className="testimonial-author-image">
                      <div className="placeholder-image"></div>
                    </div>
                    <div className="testimonial-author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="testimonial-controls">
            <button className="testimonial-control next" onClick={nextTestimonial}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goToTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
