import Navbar from "../components/Navbar";
import "../css/Contact.css"

function Contact() {
    return (
        <div>
            <Navbar />
            <div className="contact-main-content">
                <div className="contact-title-container">
                    <h1 className='contact-title'>Get in Touch</h1>
                    <p align="center">samzcalgary@gmail.com</p>
                    <p align="center">+1-226-988-4373</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;