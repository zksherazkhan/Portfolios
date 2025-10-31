import "../style/contact.css";
import { useRef } from "react";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import emailjs from '@emailjs/browser';
const Contact = () => {

  const form=useRef()
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zfrxisr', 'template_94k26in', form.current, {
        publicKey: '_jhRdXcar1Skd0iy4',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };

  return (
    <>
      <div className="container-fluid bg-black p-2 py-5 mt-5" id="contact">
        <div className="row gy-2 mx-auto contact-row">
          <div className="col-sm-12 col-md-4  coll">
            <AppSettingsAltIcon
              sx={{
                fontSize: "6em",
              }}
            />
            <p className="display-6 pt-3">
              PHONE
              <br />
              <span className="repair">REPAIR</span>
            </p>
          </div>
          <div className="col-sm-12 col-md-4   contactDetails">
            <h3>Get in Touch</h3>
            <div className=" mt-3">
              <p>
                Phone : +267 76691829
                <br />
                Email: khanyasar075@gmail.com
                <br />
                Address:Xhosa 1 ,Central District Mahalapye, Botswana
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4  px-5" style={{ color: "white" }}>
            <h3>Send Message</h3>
            <form ref={form} onSubmit={sendEmail} className="mt-3">
              <div className="form-group mb-2">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Your full Name"
                  name="user_name"
                  required
                />
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Name@example.com"
                  name="user_email"
                  required
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Write something.."
                  rows="2"
                  name="message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-full  contact-btn">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
