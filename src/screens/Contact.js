import React from "react";
import { Footer } from "../components/Footer";

export const Contact = () => {
  return (
    <>
        <div className="container">
            <form action="">
                <div className="py-2">
                    <h1 className="mb-1">Contact Me</h1>
                    <p className="text-secondary">Hi there, contact me to ask me about anything you have in mind.</p>
                </div>

                <div>
                    <div className="grid-2 py-2">
                        <div className="form-inputs">
                            <label htmlFor="first_name">First name</label>
                            <input type="text" name="first_name" id="first_name" placeholder="Enteryour first name" required/>
                        </div>
                        <div className="form-inputs py-2">
                            <label htmlFor="">Last name</label>
                            <input type="text" name="last_name" id="last_name"  placeholder="Enter your last name" required/>
                        </div>
                    </div>
                    <div className="form-inputs py-2">
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" id="email"  placeholder="yourname@gmail.com" required/>
                    </div>
                    <div className="form-inputs py-2">
                        <label htmlFor="">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible"></textarea>
                    </div>
                    
                    <div className="flex py-2 g-1">
                        <div>
                            <input type="checkbox" name="" id="" required />
                        </div>
                        <div className="text-secondary">
                            You agree to providing your data to Chibuzor who may contact you
                        </div>
                    </div>
                    <div>
                        <button type="submit" id="btn__submit" className="btn-submit">
                            Send Message
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <Footer />
    </>
  );
};
