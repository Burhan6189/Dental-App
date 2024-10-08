
import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
/* =========== Icons =========== */
import { FaStar } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { SlOptions } from "react-icons/sl";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
/* =========== Icons =========== */





const Doctors = () => {


  const [doctordata, setdoctordata] = useState([]);
  


  useEffect(() => {

    const myfun = async () => {
      const data = await fetch('/api/doctors');
      const jsondata = await data.json();
      setdoctordata(jsondata)
   
    }
    myfun()

  }, [])


  const deletedoc = async (id) => {

    const deletedata = await fetch("/api/doctors/"+id, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify({id}),
    });

    if(deletedata.ok){
      toast.success("Deleted")
      window.location.reload()
    }
    else{
      toast.error("Something is wrong")
    }

    }


  return (
    <>
      <div className="dash-items-main">
        <div className="All-Doctors-Main">
          <div className="All-Doctors-Flex">




            {doctordata?.map((items) => {
              return (
                <div className="Doctor-card">
                  <a href={"/dentistprofile/"+items?._id}>
                    <div className="content">
                      <img
                        src={items?.Image}
                        alt=""
                      />
                      <h4>{items?.Name}</h4>
                      <p>{items?.Location}</p>
                      <div className="desigination">
                        <h5>{items?.Desigination}</h5>
                      </div>
                    </div>
                  </a>

                  <div className="option-flex">
                    <div className="flex-1">
                      <FaStar />
                      <h5>{(items?.Reviews?.reduce((total, items)=> total=total+Number(items?.Rating), 0)/items?.Reviews.length).toString().substring(0,4)}</h5>
                    </div>
                    <div className="flex-2">
                      <Popup
                        trigger={
                          <button className="button">
                            <SlOptions />
                          </button>
                        }
                        position="bottom center"
                        closeOnDocumentClick
                      >
                        <div onClick={() => { window?.location?.replace('/dash/doctors/' + items?._id) }} className="option">
                          <FaEdit />
                          <p>Edit</p>
                        </div>
                        <div onClick={()=>deletedoc(items?._id)} className="option">
                          <MdDelete />
                          <p>Delete</p>
                        </div>
                      </Popup>
                    </div>
                  </div>
                </div>
              )
            })
            }




          </div>
        </div>
      </div>
      <a href="/dash/doctors/addnewdoctor">
        <div className="new-doctor-btn">
          <FiPlus size={20} />
          <h4>Add New Doctor</h4>
        </div>
      </a>
    </>
  );
};

export default Doctors;




