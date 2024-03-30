import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputField from "./inputField";
import { useState } from "react";

const ContactForm = ()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, subject, message };

    if (!name || !email || !subject || !message) {
        toast.error("Please provide all fields");
        return;
    }
    setIsLoading(true);

    try {
        const response = await fetch('https://send-mail-b2yq.onrender.com/api/sendmail', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error(`An error has occured: ${response.status}`);
        }

        const responseData = await response.json();
        // console.log(responseData)

        toast.success("Message sent successfully");
    } catch (error) {
        toast.error("Error: " + error.message);
    }
    setIsLoading(false);
};

    return( 
    <>
        <ToastContainer />

    <h3 className="contact-title">SEND ME AN EMAIL</h3>
                <h4 className="contact-sub-title">{`I'M VERY RESPONSIVE TO MESSAGES`}</h4>
                {isLoading && (
                <div className="alert">
                    <div className="form-info showAlert" />
                    <span>Loading...</span>
                    <span className="loader showLoader"></span>
                </div>
            )}
                <div >
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
                                    onChange={(e) => setName(e.target.value)}

                                />
                                <InputField
                                    type="email"
                                    id="email"
                                    className="email"
                                    placeholder="Email"
                                    colSize="col-6"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}

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
                                    onChange={(e) => setSubject(e.target.value)}
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
        </>
    )
};
export default ContactForm;