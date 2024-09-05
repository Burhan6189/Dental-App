import React from "react";

const MiniAbout = () => {
  return (
    <>
      <div className="Mini-About-Main">
        <div className="Mini-About-Hd">
          <h2>Welcome to Dentario</h2>
          <p>Highest level of service you can find</p>
        </div>
        <div className="Mini-About-Flex">
          <div>
            <img
              src="https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg?t=st=1725444797~exp=1725448397~hmac=3cd18bcefa614398f3ae60d999c1b2a6c9a0c692f4713db346dfe96534d34f4f&w=1480"
              alt=""
            />
          </div>
          <div>
            <p>
              Our focus is on your overall well being and helping you achieve
              optimal health and esthetics. We provide state-of-the-art dental
              care in a comfortable.
            </p>
            <div className="inner-flex">
              <div>
                <img
                  className="icon"
                  src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1725463388/Dental/Icons/cgrzejchpo68n5yrpf4p.png"
                  alt=""
                />
              </div>
              <div>
                <h5>Our Mission</h5>
                <p>Has provided a high class facility for the treatment</p>
              </div>
            </div>
            <div className="inner-flex">
              <div>
                <img
                  className="icon"
                  src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1725463388/Dental/Icons/tju2sdxla3i7vx1j78jy.png"
                  alt=""
                />
              </div>
              <div>
                <h5>Professionals in our Clinick</h5>
                <p>Has provided a high class facility for the treatment</p>
              </div>
            </div>
            <button>More About us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniAbout;
