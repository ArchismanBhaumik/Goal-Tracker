import React from 'react'

function AddGoalModal() {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={userInfo.name}
              onChange={handleChange}
              className="input-style"
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="abc@123"
              value={userInfo.password}
              onChange={handleChange}
              className="input-style"
            />
          </div>

          <button type="submit" className="btn-submit">
            Login
          </button>

          <span className={userAuthorised ? "d-none" : "warning"}>
            Wrong info!
          </span>
        </form>
      </div>
    </div>
  );
}

export default AddGoalModal