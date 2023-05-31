import React from "react";

import stl from "./EmailSub.module.scss";

const EmailSub = () => {
  const [value, setValue] = React.useState("");

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === "") {
      alert("Email should not be Empty!");
    } else if (!emailRegex.test(value)) {
      alert("Email address not valid!");
    } else {
      alert(`Thank you for subscribing!\n \n Email: ${value}`);
    }
    setValue("");
  };

  return (
    <div className={stl.emailSub}>
      <input
        value={value}
        name="email"
        placeholder="Enter Email address"
        className={stl.input}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className={stl.btn} onClick={handleSubmit}>
        Subscribe
      </button>
    </div>
  );
};

export default EmailSub;
