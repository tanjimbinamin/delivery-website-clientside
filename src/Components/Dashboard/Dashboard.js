import React, { useState } from "react";
import AddService from "./AddOrders/AddOrders";
import "./Dashboard.css";
import AllOrders from "./AllOrders/AllOrders";
import MyOrders from "./MyOrders/MyOrders";
import AllService from "./AllService/AllService";


const Dashboard = () => {
  const [control, setControl] = useState("allOrders");

  console.log(control);
  return (
    <div className="admin-container">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row admin-container">
            <div className="col-md-3 ">
              <div className="admin-area p-1 text-center">
                <h6 style={{fontFamily: 'Pacifico',fontSize:"3rem",marginTop:"3rem"}}>Dashboard</h6>
                <div className="all-menu mt-5">
                  <li
                    onClick={() => setControl("allOrders")}
                    className="admin-menu p-2 btn-primary mb-3 mx-5" style={{fontSize:"2rem",borderRadius:"40px"}}
                  >
                    All Orders
                  </li>
                  <li
                    onClick={() => setControl("addOrders")}
                    className="admin-menu p-2 btn-primary mb-3 mx-5" style={{fontSize:"2rem",borderRadius:"40px"}}
                  >
                    Add Orders
                  </li>
                  <li
                    onClick={() => setControl("myOrders")}
                    className="admin-menu p-2 btn-primary mb-3 mx-5" style={{fontSize:"2rem",borderRadius:"40px"}}
                  >
                    My Orders
                  </li>
                  <li
                    onClick={() => setControl("allService")}
                    className="admin-menu p-2 btn-primary mb-3 mx-5" style={{fontSize:"2rem",borderRadius:"40px"}}
                  >
                    All Services
                  </li>
                </div>
              </div>
            </div>
            <div className="col-md-9 text-center  text-center">
              {control === "allOrders" && <AllOrders></AllOrders>}
              {control === "myOrders" && <MyOrders></MyOrders>}
              {control === "addOrders" && <AddService></AddService>}
              {control === "allService" && <AllService></AllService>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;