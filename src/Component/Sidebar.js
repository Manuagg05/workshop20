import React from "react";
import "./Sidebar.css";

const SideBar = () => {
  return (
    <>
      <div className="patient p-3">
        <h5 className="fw-700">Patients</h5>

        <div className="input-group">
            <input type="text" id="src-input" className="form-input form-control border-none position-relative ps-3" placeholder="Search Patient" autoFocus />
                <div class="position-absolute src-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
        </div>

        <div className="dropdown"> 
          <div className="dropbox blue d-flex justify-content-between align-items-center p-2 px-3 my-3">
            <img className="dropimage img-fluid  rounded-circle " src="./images/dropboximage.png" />
            <div className="w-60">
              <h6 className="mb-0 text-white fw-700">Sara Smith</h6>
              <p className="mb-0 text-white">15 Aug 2020</p>
            </div>
            <span className="circle green"></span>
          </div>
        </div>

        <div className="dropdown"> 
          <div className="dropbox d-flex justify-content-between align-items-center p-2 px-3 my-3">
            <img className="dropimage img-fluid  rounded-circle " src="./images/image3.png" />
            <div className="w-60">
              <h6 className="mb-0 fw-700">James Johnson</h6>
              <p className="mb-0">15 Aug 2020</p>
            </div>
            <span className="circle red"></span>
          </div>
        </div>

        <div className="dropdown"> 
          <div className="dropbox  d-flex justify-content-between align-items-center p-2 px-3 my-3">
            <img className="dropimage img-fluid  rounded-circle " src="./images/image4.png" />
            <div className="w-60">
              <h6 className="mb-0 fw-700">Patrise Page</h6>
              <p className="mb-0">15 Aug 2020</p>
            </div>
            <span className="circle green"></span>
          </div>
        </div>

        <div className="dropdown"> 
          <div className="dropbox d-flex justify-content-between align-items-center p-2 px-3 my-3">
            <img className="dropimage img-fluid  rounded-circle " src="./images/image5.png" />
            <div className="w-60">
              <h6 className="mb-0 fw-700">Derick Daimon</h6>
              <p className="mb-0">15 Aug 2020</p>
            </div>
            <span className="circle green"></span>
          </div>
        </div>

      </div>
      
    </>
  );
};
export default SideBar;
