import React from 'react'
import "./Bigside.css"

const Bigside = ()=>{
    return(
        <>
        <div className="majorPatient">
            <li className="patientName mb-0 fontWeight">liatient Information</li>
    <div className="box1">
            <img  className="image" src="./images/dropboximage.png"/>
                <div className="box2">

                     <h5>Sara Smith</h5>

                     <div className="box3">

                        <div className="box3-1">
                         <div className="box3-1-1 ">
                           <li>lihone:</li>
                           <li>Email:</li>
                           <li>Gender:</li>
                           <li>Age:</li>
                         </div>
                         <div className="box3-1-2 fontWeight">
                           <li>8851635630</li>
                           <li>manu1@gmai.com</li>
                           <li>Male</li>
                           <li>20</li>
                           </div>
                          </div> 
                            
                   <div className="box3-2 ">
                     <div className="box3-2-1 ">
                     <li>Surgerytype:</li>
                           <li>SurgeryDate:</li>
                           <li>Height(cm):</li>
                           <li>Weight(kg):</li>
                           <li>BMI:</li>
                     </div>
                     <div className="box3-2-2 fontWeight">
                     <li>mmmmmm</li>
                           <li>mmmmmmmm</li>
                           <li>jjjjjj</li>
                           <li>jj</li>
                           <li>uuu</li>
                     </div>
                  </div> 
                           
                  <div className="box3-3">
                  <div className="box3-3-1">
                  <li>Anesthesiologist:</li>
                           <li>Anesthesiologistlihone:</li>
                           <li>AnesthesiologistEmail:</li>
                  </div>
                     <div className="box3-3-2 fontWeight">
                     <li>Something:</li>
                           <li>7777777777:</li>
                           <li>hjk@gmail.com:</li>
                     </div>
                  
                    </div>
                    <div className="box3-4">
                      <div className="box3-4-1">
                        <li>SurgeryClearence</li>
                      </div>
                      <div className="box3-4-2 c2">
                        <div className="circle1 ">Yes</div>
                      </div>
                    </div>

                  </div> 
                </div>
            </div>

           
<div className="collaps">
  <p>
  <a class="btn btn-light btn-sm" data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2">List Of Prior<br/> Surgeries</a>
  <button class="btn btn-light btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">List Of Medical <br/>Daignosis</button>
  <button class="btn  btn-light btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second <br/>element</button>
  <button class="btn btn-light btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second<br/> element</button>
  <button class="btn btn-light btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second <br/>element</button>
  <button class="btn btn-light btn-sm" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both<br/> elements</button>
</p>
</div>
<div class="row mt-5">
  <div class="col mt-5">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      
    <div className="dropdown mt-5 "> 
          <div className="dropbox  d-flex justify-content-between align-items-center p-2 px-3 my-3 font">

             <div className="widt ">
              <div className="mb-0 fw-700 lightblue">First Time Surgery</div>
              <div className="mb-0 grey">No</div>
            </div>
           
          </div>
 
          
          <div className="dropbox  d-flex justify-content-between align-items-center p-2 px-3 my-3 font">
     
            <div className="widt ">
              <div className="mb-0 fw-700  lightblue">Family History Of Complication</div>
              <div className="mb-0 grey">No</div>
            </div>
  
          </div>
        

          
          <div className="dropbox  d-flex justify-content-between align-items-center p-2 px-3 my-3 font ">
            
            <div className="widt">
              <div className="mb-0 fw-700   lightblue">if yes please provide more details</div>
              <div className="mb-0 grey height" >loremhgghg hghghggmhhghg fgjhge hghgg jghgggeg hghghgh mhmhggh gfejgfejg <br/>jhdghgh jdfgjhg jhjhjh fe gghgfhgf</div>
            </div>
  
          </div>
      

      
          <div className="dropbox  d-flex justify-content-between align-items-center p-3  font">
        
            <div className="wid ">
              <h5 style={{color: "lightgrey"}}>Previous surgery</h5>
              <div className="mb-0  fw-300  lightblue height2  centertext d-flex ">
                <p style={{color: "black"}} className="font padd">Surgery type</p>
                <p style={{color: "black"}} className="font">Date</p>
                <p style={{color: "black"}} className="font">Anesthesia Type</p>
                <p style={{color: "black"}} className="font">Surgical Complications</p>
                <p style={{color: "black"}} className="font">Anesthetic Complication (nausea ,vomitting,difficult intubation) </p>
              </div>
              <div className="mb-0 grey height2 centertext d-flex  ">
                 <p style={{color: "black"}} className="font">Shoulder reconstruction</p>
                <p style={{color: "black"}} className="font">January 2008</p>
                <p style={{color: "black"}} className="font">General breathding tube</p>
                <p style={{color: "black"}} className="font">No</p>
                <p style={{color: "black"}} className="font">No</p>
              </div>
            </div>
       
          </div>
          <button class="btn btn-primary btn-md m-3" type="button" >+Add Syrgery</button>
        

        </div>
      
    </div>
  </div>
</div>


            
                

</div>
    
        </>
    )
}
export default Bigside;