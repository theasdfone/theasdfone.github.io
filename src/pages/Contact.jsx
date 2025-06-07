import Navbar from "../components/Navbar";
import "../css/Contact.css";

import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


function Contact() {
    return (
        <div>
            <Navbar />
            <div className="contact-main-content">
                <div className="contact-title-container">
                    <h1 className='contact-title'>Get in Touch</h1>
                    <p align="center">For any professional opportunities, I would love to get in touch. Please feel free to reach out with the contacts below:</p>
                    <div className="contact-details">
                        <div className="contact-details-container">
                            <MdOutlineEmail />
                            <p align="center">samzcalgary@gmail.com</p>
                        </div>
                        <div className="contact-details-container">
                            <FaPhoneAlt />
                            <p align="center">+1-226-988-4373</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;