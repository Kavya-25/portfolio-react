import React, { useState } from "react";
import "./Form.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const FormSection = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setDetails({ ...details, [name]: value });
  };
  const handleSubmit = (e) => {
    const { name, email, subject, message } = details;
    e.preventDefault();
    if(name && email && subject && message){
    const res = fetch(
      "https://my-portfolio-6f42d-default-rtdb.firebaseio.com/usermessage.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      }
    );
    if(res){
      toast.success("Message sent successfully",{
        theme:"dark",autoClose: 3000
      })
      setDetails({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }
    else{
      toast.error("Plzz fill all the input fields ",{theme:"dark",autoClose: 3000})
    }
  }else{
    toast.error("Plzz fill all input fields ",{theme:"dark",autoClose: 3000})
  }
  };

  return (
    <form className="formsection">
    <ToastContainer position="top-right" autoClose={3000} closeOnClick/>
      <img src="/images/location.png" alt="" className="location" />
      <h2>
        ("want to collab or have any idea?&nbsp;<span>contact me here")</span>
      </h2>
      <div className="form-box">
        <div className="input-box">
          <input
            type="text"
            placeholder="<_name>"
            onChange={handleChange}
            name="name"
            value={details.name}
          />
          <input
            type="email"
            placeholder="<_email>"
            onChange={handleChange}
            name="email"
            value={details.email}
          />
          <input
            type="text"
            placeholder="<_subject>"
            onChange={handleChange}
            name="subject"
            value={details.subject}
          />
        </div>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="<your_message/>"
          value={details.message}
          type="text"
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="form-btn" onClick={handleSubmit}>
        ("send_message")
      </button>
    </form>
  );
};
