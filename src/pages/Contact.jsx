import SocialLinks from "../components/Sociallinks";
import InputField from "../components/inputField";
import { FaEnvelope, FaGlobe, FaPhone } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Form submitted:", { name, email, subject, message });
        const formData = { name, email, subject, message };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Response is not OK");
            }

            const responseData = await response.json();

            console.log("Form submitted:", responseData);
        } catch (error) {
            console.error("Error:", error);
        }
    };
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
                <h3 className="contact-title">SEND ME AN EMAIL</h3>
                <h4 className="contact-sub-title">{`I'M VERY RESPONSIVE TO MESSAGES`}</h4>
                <div className="alert">
                    <div className="form-info" />
                    <span className="loader" />
                </div>
                <div className>
                    <form className="sendMail" onSubmit={handleSubmit}>
                        <div className="contact-form">
                            <div className="row">
                                <InputField
                                    type="text"
                                    id="name"
                                    className="name"
                                    placeholder="Name"
                                    colSize="col-6"
                                    value={name}
                                    setValue={setName}
                                />
                                <InputField
                                    type="email"
                                    id="email"
                                    className="email"
                                    placeholder="Email"
                                    colSize="col-6"
                                    value={email}
                                    setValue={setEmail}
                                />
                            </div>
                            <div className="row">
                                <InputField
                                    type="text"
                                    id="subject"
                                    className="subject"
                                    placeholder="Subject"
                                    colSize="col-12"
                                    value={subject}
                                    setValue={setSubject}
                                />
                            </div>
                            <div className="row">
                                <div className="form-item col-12">
                                    <div className="form-group">
                                        <textarea
                                            name="message"
                                            className="form-control message"
                                            id="message"
                                            placeholder="Message"
                                            value={message}
                                            onChange={(e) =>
                                                setMessage(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-item col-12">
                                    <button className="btn" type="submit">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
export default Contact;
