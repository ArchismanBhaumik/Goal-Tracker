import React, { use } from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";
import LandingPage from "./LandingPage";
import AllGoals from "./AllGoals";
import WeeklyGoals from "./WeeklyGoals";
import CompletedGoals from "./CompletedGoals";
import SideBar from "./SideBar";
import AddGoalModal from "./AddGoalModal";

function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [addGoalOpen , setAddGoalOpen] = useState(false);

  function setModalToggle() {
    setModalOpen((prev) => !prev);
    console.log(modalOpen);
  }
  return (
    <div>
      <button
        className={userName ? "d-none" : "btn-sign-in"}
        onClick={setModalToggle}
      >
        Sign in
      </button>
      <button className={userName ? "btn-sign-in" : "d-none"} onClick={()=>setAddGoalOpen((prev)=>!prev)}>
        Add New Goal
      </button>
      <div>
        <Routes>
            <Route path="/" element={<LandingPage userName={userName}/>} />
            <Route path="/all-goals" element={<AllGoals />} />
            <Route path="/weekly" element={<WeeklyGoals />} />
            <Route path="/completed" element={<CompletedGoals />} />
        </Routes>
      </div>
      <div className={`${modalOpen ? "" : "d-none"}`}>
        <Modal
          setModalOpen={setModalOpen}
          modalOpen={modalOpen}
          userName={userName}
          setUserName={setUserName}
        />
      </div>
        <div className={`${addGoalOpen ? "" : "d-none"}`}>
        <AddGoalModal addGoalOpen={addGoalOpen} setAddGoalOpen={setAddGoalOpen} />
      </div>
      
      <SideBar userName={userName} />
    </div>
  );
}

export default Home;
