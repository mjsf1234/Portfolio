import "./Form.css";

import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [Values, setValues] = useState({
    firstname: "",
    Email: "",
    message: "",
  });

  const [isValidName, setisValidName] = useState(true);
  const [isValidEmail, setisValidEmail] = useState(true);

  const nameChangeHandler = (event) => {
    if (Values.firstname.length > 0) {
      setisValidName(true);
    }
    setValues((prevState) => {
      return { ...prevState, firstname: event.target.value };
    });
  };

  const emailChangeHandler = (event) => {
    if (Values.Email.length > 0) {
      setisValidEmail(true);
    }

    setValues((prevState) => {
      return { ...prevState, Email: event.target.value };
    });
  };
  const messageChangeHandler = (event) => {
    setValues((prevState) => {
      return {
        ...prevState,
        message: event.target.value,
      };
    });
  };

  const getData = (data) => {
    axios
      .post("http://localhost:8001/api/data", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const submitFormHandler = (event) => {
    event.preventDefault();

    console.log(Values);

    if (Values.firstname.length === 0) {
      setisValidName(false);
      return;
    }
    if (Values.Email.length === 0) {
      setisValidEmail(false);
      return;
    }
    getData(Values);
    alert("request received");

    setValues((prevState) => {
      return {
        ...prevState,
        firstname: "",
        Email: "",
        message: "",
      };
    });
  };
  return (
    <div className="form-main">
      <div className="form-title">
        <label>Contact me</label>
      </div>
      <form onSubmit={submitFormHandler}>
        <input
          type="text"
          className={`form-field ${!isValidName ? "invalid" : ""}`}
          onChange={nameChangeHandler}
          placeholder="Enter Your Name"
          value={Values.firstname}
        ></input>

        <input
          type="email"
          className={`form-field ${!isValidEmail ? "invalid" : ""}`}
          placeholder="Enter Your Email"
          value={Values.Email}
          onChange={emailChangeHandler}
        ></input>
        <input
          type="text"
          placeholder="Type something"
          value={Values.message}
          className="form-message"
          onChange={messageChangeHandler}
        ></input>

        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
