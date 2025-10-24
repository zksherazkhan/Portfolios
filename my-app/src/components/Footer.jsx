import React from "react";
import "../style/footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-scroll";
const footer = () => {
  return (
    <>
      <footer className="footer">
        <div className=" footerIcones ">
          <a href="https://www.facebook.com/yasar.khan.779018">
            <FacebookIcon
              className="socialMediaIconsStyle"
              sx={{
                fontSize: "2em",
                margin: "0px 6px",
                color: "white",
              }}
            />
          </a>
          <a href="https://wa.me/26776691829">
            <WhatsAppIcon
              className="socialMediaIconsStyle"
              sx={{
                fontSize: "2em",
                margin: "0px 6px",
                color: "white",
              }}
            />
          </a>
          <a href="https://mail.google.com/mail/u/0/?fs=1&to=khanyasar075@gmail.com&su=Enquiry&tf=cm">
            <EmailIcon
              className="socialMediaIconsStyle"
              sx={{ fontSize: "2em", margin: "0px 6px", color: "white" }}
            />
          </a>
        </div>
        <div className="mx-auto">
          <p className=" text-center ">
            ©copyright 2025 :Yasar repair services.All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default footer;
