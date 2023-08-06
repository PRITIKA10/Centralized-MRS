import React from 'react'
import './contact.css';

export default function Contact() {
  return (
    <div className='yo-yo'>
      <section className="contact-page-section">
      <div className="container">
          <div className="sec-title">
              <div className="title">Contact Us</div>
                <h2>Let's Get in Touch.</h2>
            </div>
            <div className="inner-container">
              <div className="row clearfix">
                
                  
                    <div className="form-column col-md-8 col-sm-12 col-xs-12">
                      <div className="inner-column">
                          
                            
                            <div className="contact-form">
                                <form method="post" action="sendemail.php" id="contact-form">
                                    <div className="row clearfix">
                                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                            <input type="text" name="name" value="" placeholder="Name" required/>
                                        </div>
                                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                            <input type="email" name="email" value="" placeholder="Email" required/>
                                        </div>
                                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                            <input type="text" name="subject" value="" placeholder="Subject" required/>
                                        </div>
                                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                            <input type="text" name="phone" value="" placeholder="Phone" required/>
                                        </div>
                                        <div className="form-group col-md-12 col-sm-12 co-xs-12">
                                            <textarea name="message" placeholder="Massage"></textarea>
                                        </div>
                                        <div className="form-group col-md-12 col-sm-12 co-xs-12">
                                            <button type="submit" className="theme-btn btn-style-one">Send Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                    
                    
                    <div className="info-column col-md-4 col-sm-12 col-xs-12">
                      <div className="inner-column">
                          <h2>Contact Info</h2>
                            <ul className="list-info">
                              <li><i className="fas fa-globe"></i>Dhankawadi,Pune.</li>
                                <li><i className="far fa-envelope"></i>prohera@gmail.com</li>
                                <li><i className="fas fa-phone"></i>9623470701 <br/>8087069750</li>
                            </ul>
                            <ul className="social-icon-four">
                                <li className="follow">Follow on: </li>
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
