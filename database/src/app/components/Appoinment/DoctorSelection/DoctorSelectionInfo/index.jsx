import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";
import { MdOutlineLocationOn } from "react-icons/md";

const DoctorSelectionInfo = () => {
  const router = useRouter();
  const [doctors, setdoctors] = useState([]);

  useEffect(() => {
    const fun = async () => {
      const data = await fetch("/api/doctors");
      const jsondata = await data.json();
      setdoctors(jsondata);
    };
    fun();
  }, []);

  const selectedfun = (doctorname) => {
    router.push("/calendar?doctorname=" + doctorname);
  };

  return (
    <>
      <div className="Doctor-Info-Selection-Main">
        {doctors?.map((items) => {
          return (
            <div>
              <div className="Doctors-Info-Main">
                <div>
                  <img src={items?.Image} alt="" />
                </div>
                <div className="Main-Flex">
                  <div className="flex">
                    <div className="des">
                      <h5>{items?.Department}</h5>
                    </div>
                    <div className="rating">
                      <FaStar className="i" />
                      <h5>{((items?.Reviews?.reduce((total, items)=> total=total+Number(items?.Rating), 0)/items?.Reviews.length).toString().substring(0,4))}</h5>
                    </div>
                  </div>
                  <div className="Name">
                    <h3>{items?.Name}</h3>
                  </div>
                  <div className="flex">
                    <GrDocumentUser className="i" />
                    <h5>{items?.Desigination}</h5>
                  </div>
                  <div className="flex">
                    <MdOutlineLocationOn className="i" />
                    <h5>{items?.Location}</h5>
                  </div>
                  <div>
                    <a href={"/dentistprofile/" + items?._id}>
                      <button className="view-profile-btn">View Profile</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="Select-Doctor-Btn">
                <button onClick={() => selectedfun(items?.Name)}>
                  Book An Appointment
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DoctorSelectionInfo;
