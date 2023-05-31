import React from "react";

import stl from "./EmailSub.module.scss";

const EmailSub = () => {
  const [value, setValue] = React.useState("");

  const handleSubmit = () => {
    console.log(value);
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
