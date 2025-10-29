import { Link } from "react-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import shapImg from "../assets/yasarImg.png";
import "../style/home.css";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Be your Phone Technician",
      "Fix your Screen",
      "Fix your Charging Port",
      "Fix your Software Issues",
    ],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 90,
    delaySpeed: 1000,
  });

  return (
    <>
      <div className="home  container-fluid" id="/">
        <div className="row">
          <div className="col-md-12 col-xl-7 ">
            <div className="home-heading animation">
              <p className="heading-text">
                Hello,I will <br />
                <span className="animatedTyping">
                  {text}
                  <span>
                    <Cursor cursorColor="#ff6b08" />
                  </span>
                </span>
                <br />
                Experienced phone repair technician skilled in diagnosing and
                fixing a variety of issues, from cracked screens to battery
                replacements. Committed to providing quick, reliable service
                with a focus on customer satisfaction.
              </p>
              <Link className="btn btn-full hire-btn"   smooth={true}
                  
                  duration={800}
                  to="contact">
                Hire Me
              </Link>
            </div>
          </div>
          <div className="col-xl-5 right">
            <div
              className="box">
                <img src={shapImg} /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
