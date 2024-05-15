import { useRef, useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiWhatsapp } from "react-icons/si";
import emailjs from '@emailjs/browser';
import AlertBox from "../alert-box";

export default function ContactMe() {

  const form = useRef()

  const [message, setMessage] = useState("")
  const [showMessage, setShowMessage] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ar71r9e', 'template_dnpo35c', form.current, {
        publicKey: 'rWQMd4LwL0yAwu3LL',
      })
      .then(
        (result) => {
          form.current.reset();
          setMessage("Email sent successfully")
          setShowMessage(true)
          setTimeout(() => {
            setShowMessage(false)
          }, 5000)
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessage("Email sent failed")
          setShowMessage(true)
          setTimeout(() => {
            setShowMessage(false)
          }, 5000)
        },
      );
  };

  return (
    <>
      <section id="Contact" className="contact--section">
        <div>
          <p className="sub--title">Get In Touch</p>
          <h2>Contact Me</h2>
          <h5>If you want to discuss more in detail, please contact me</h5>
        </div>
        {
          showMessage &&
          <div style={{ background: "#a8ddf3", height: "40px", minWidth: "500px", border: "none", borderRadius: "10px", color: 'black', display: 'flex', justifyContent: "center", alignItems: "center" }}>
            {message}
          </div>
        }
        <form className="contact--form--container" ref={form} onSubmit={sendEmail}>
          <div className="container">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">First Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="from_name"
                id="first-name"
                required
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact--input text-md"
                name="from_email"
                id="email"
                required
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md">phone-number</span>
              <input
                type="number"
                className="contact--input text-md"
                name="from_number"
                id="phone-number"
                required
              />
            </label>
          </div>
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-md"
              id="message"
              name="message"
              rows="8"
              placeholder="Type your message..."
            />
          </label>
          <div>
            <button className="btn btn-primary contact--form--btn">Submit</button>
          </div>
        </form>
        <div className={"contact-me-main"}>
          <div title={"Gmail"}><a
            href="https://www.naveenkumarrnk2701@gmail.com"
            className="navbar--content"
            target="_blank"
            rel="noreferrer"
          ><BiLogoGmail className="social-media-icons" /></a>
          </div>
          <div title={"Whatsapp"}>
            <a
              href="https://www.whatsapp.com"
              className="navbar--content"
              target="_blank"
              rel="noreferrer"
            ><SiWhatsapp className="social-media-icons" /></a></div>
          <div title={"Instagram"}>
            <a
              href="https://www.instagram.com/_rnk46_/?igsh=ZjF2cGp4YnBwbXc%3D"
              className="navbar--content"
              target="_blank"
              rel="noreferrer"
            ><RiInstagramFill className="social-media-icons" /></a></div>
          <div title={"Linkedin"}>
            <a
              href="https://www.linkedin.com/in/naveenkumar2701"
              className="navbar--content"
              target="_blank"
              rel="noreferrer"
            ><BsLinkedin className="social-media-icons" />
            </a></div>
        </div>
      </section>

    </>
  );
}
