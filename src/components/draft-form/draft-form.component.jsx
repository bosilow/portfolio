import "./draft-form.styles.scss";

import { useState } from "react";

import FormInput from "../form-input/form-input.component";

const DraftForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <FormInput type="name" label="Name:" />
      <FormInput type="email" label="Email:" />
      <FormInput type="message" label="Enter your message here:" />
      <button className="form-btn" type="submit">
        {status}
      </button>
    </form>
  );
};

export default DraftForm;
