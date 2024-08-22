import React from "react";
import { IoIosCall } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className="Header-Main">
        <div className="hd-flex-1">
          <div>
            <div className="tel">
              <h5>
                <span>Free Call</span> +1 800 125 65 24
              </h5>
            </div>
            <div className="address">
              <h5>528 tenth Avenue, Boston, BT 58965</h5>
            </div>
          </div>
          <div className="hd-i">
            <IoIosCall size={20} />
          </div>
        </div>
        <div className="hd-flex-2">
          <div className="hd-i">
            <IoCalendarOutline size={20} />
          </div>
          <div>
            <div className="tel">
              <h5>Open hours:</h5>
            </div>
            <div className="address">
              <h5>
                Mn - St: <span> 8:00am - 9:00pm </span> Sn: Closed
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
