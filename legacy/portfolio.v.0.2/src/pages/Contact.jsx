import SocialLinks from "../components/Sociallinks";
import { FaEnvelope, FaGlobe, FaPhone } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

const Contact = () => {

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>Contact Me</h2>
                    </div>
                </div>
                <h3 className="contact-title">Have You Any Question</h3>
                <h4 className="contact-sub-title">{`I'M AT YOUR SERVICES`}</h4>
                <div className="row contact-st">
                    <div className="contact-info-item">
                        <div className="icon">
                            <FaPhone />
                        </div>
                        <h4>Call, whatsApp</h4>
                        <p>+254 794 5917 84</p>
                    </div>
                    <div className="contact-info-item">
                        <div className="icon">
                            <FaGlobe />
                        </div>
                        <h4>Social Media</h4>
                        <div>
                            <SocialLinks />
                        </div>
                    </div>
                    <div className="contact-info-item">
                        <div className="icon">
                            <FaEnvelope />
                        </div>
                        <h4>Email</h4>
                        <p>hezronnyamboga6@gmail.com</p>
                    </div>
                </div>
                {/* contact form  */}
                <ContactForm />

            </div>
        </section>
    );
};
export default Contact;
