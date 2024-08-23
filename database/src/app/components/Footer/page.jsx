import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import { FaDigg } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="Footer-Main">
        <div className="container">
          <div className="Footer-Flex">
            <div className="footer-sec">
              <img
                src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1724342406/Dental/uxhd1gk2lsxpm0ogooep.png"
                alt=""
              />
              <p>
                Our focus is on your overall well being and helping you achieve
                optimal health and esthetics. We provide stateof the art dental
                care.
              </p>
              <p>
                Types of bridges may vary, depending upon how they are
                fabricated and the way they
              </p>
              <div className="i-flex">
                <FaTwitter className="i" />
                <TfiGoogle className="i" />
                <FaFacebookF className="i" />
                <FaDigg className="i" />
              </div>
            </div>
            <div className="footer-sec-second">
              <h3>Recent News</h3>
              <div className="footer-sec-inner">
                <img
                  src="https://i.pinimg.com/564x/b4/e0/16/b4e016f63a4973233994c40bdeb30ede.jpg"
                  alt=""
                />
                <div>
                  <p>Dental patients given increased protection</p>
                  <h5>February 2, 2016 by John Doe in News</h5>
                </div>
              </div>
              <div className="footer-sec-inner">
                <img
                  src="https://i.pinimg.com/564x/b4/e0/16/b4e016f63a4973233994c40bdeb30ede.jpg"
                  alt=""
                />
                <div>
                  <p>Dental patients given increased protection</p>
                  <h5>February 2, 2016 by John Doe in News</h5>
                </div>
              </div>
              <div className="footer-sec-inner">
                <img
                  src="https://i.pinimg.com/564x/b4/e0/16/b4e016f63a4973233994c40bdeb30ede.jpg"
                  alt=""
                />
                <div>
                  <p>Dental patients given increased protection</p>
                  <h5>February 2, 2016 by John Doe in News</h5>
                </div>
              </div>
            </div>
            <div className="footer-sec-third">
              <h3>Contact Us</h3>
              <input type="text" placeholder="Name*" />
              <input type="text" placeholder="E-mail*" />
              <textarea type="text" rows={5} cols={5} placeholder="Message" />
              <button>Send Message</button>
            </div>
          </div>
        </div>
      </div>
      <div className="Footer-Bottom">
        <h5>ThemeREX © 2017 All Rights Reserved.</h5>
      </div>
    </>
  );
};

export default Footer;
