import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
function AddGoalModal({ setAddGoalOpen, addGoalOpen }) {
  const [goal, setGoal] = useState({
    name: "",
    description: "",
    status: "New",
    startDate: "",
    endDate: "",
  });
  const modalRef = useRef(null);
  function handleChange(e) {
    setGoal({ ...goal, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // simple validation
    if (!goal.name || !goal.description || !goal.startDate || !goal.endDate) {
      alert("Fields cannot be empty!");
      return;
    }

    console.log("Goal Submitted: ", goal);

    setAddGoalOpen(false);
  }

  return (
    <div className="modal-overlay" onClick={() => setModalOpen(false)}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <FontAwesomeIcon
          icon={faXmark}
          className="close-modal"
          onClick={() => setAddGoalOpen(false)}
        />
        <h2 className="modal-title">Add New Goal</h2>

        <form onSubmit={handleSubmit}>
          {/* Goal Name */}
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Goal Name"
              value={goal.name}
              onChange={handleChange}
              className="input-style"
            />
          </div>

          {/* Goal Description */}
          <div className="input-group">
            <textarea
              name="description"
              placeholder="Goal Description"
              value={goal.description}
              onChange={handleChange}
              className="input-style description"
            />
          </div>

          {/* Goal Status */}
          <div className="input-group">
            <select
              name="status"
              value={goal.status}
              onChange={handleChange}
              className="input-style"
            >
              <option value="New">New</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* Start Date */}
          <div className="input-group">
            <label>Start Date:</label>
            <input
              type="date"
              name="startDate"
              value={goal.startDate}
              onChange={handleChange}
              className="input-style"
            />
          </div>

          {/* End Date */}
          <div className="input-group">
            <label>End Date:</label>
            <input
              type="date"
              name="endDate"
              value={goal.endDate}
              onChange={handleChange}
              className="input-style"
            />
          </div>

          <button type="submit" className="btn-submit">
            Add Goal
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddGoalModal;
