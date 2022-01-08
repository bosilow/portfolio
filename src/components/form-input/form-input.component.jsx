import { useState } from "react";
import "./form-input.styles.scss";

const FormInput = ({ type, label }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="input-container">
      <input type={type} value={value} onChange={handleChange} required />
      <label className={value && "filled"} htmlFor={type}>
        {label}
      </label>
    </div>
  );
};

export default FormInput;
