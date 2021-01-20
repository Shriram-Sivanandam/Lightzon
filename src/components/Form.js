import React from 'react';
import emailjs from "emailjs-com";
import "./Form.css"

function Form() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_6v5qphe', 'template_a9m4wdu', e.target, 'user_uWqFEbGFvW6TNZpM9xTOi')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }
    
    return (
        <div>
            <div className="container">
                <form className="contact-form" onSubmit={sendEmail}>
                    <div className="form__element">
                        <label>Name</label>
                        <input type="text" placeholder="Your Name..." name="name"></input>
                    </div>
                    <div className="form__element">
                        <label>Contact Number</label>
                        <input type="text" placeholder="Your Contact Number..." name="phoneNumber"></input>
                    </div>
                    <div className="form__element">
                        <label>Address</label>
                        <textarea type="text" placeholder="Your Address..." name="address"></textarea>
                    </div>
                    <div className="form__btns">
                        <input className="btns" type="submit" value="Send Message"></input>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form
