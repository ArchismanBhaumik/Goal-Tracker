import React, { useState } from "react";

function Modal({ modalOpen, setModalOpen, userName, setUserName }) {
  const [userInfo, setUserInfo] = useState({
    password: "",
    name: "",
  });

  const [userAuthorised, setUserAuthorised] = useState(true);

  const authorisedUser = {
    password: "abc@123",
    name: "Archisman Bhaumik",
  };

  function handleChange(e) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  function authoriseUser() {
    if (
      userInfo.name === authorisedUser.name &&
      userInfo.password === authorisedUser.password
    ) {
      setUserAuthorised(true);
      return true;
    } else {
      setUserAuthorised(false);
      return false;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (authoriseUser()) {
      setUserName(userInfo.name);
      setUserInfo({ password: "", name: "" });
      setModalOpen(false);
    }
  }

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

export default Modal;
