import React from "react";
import "./From.css";
import { useState } from "react";
const Forms = ({ onChnagesArray }) => {
  const [user, setUser] = useState({
    name: "",
    lang: "",
    textare: "",
    code: "",
    // time: new Date(),
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitedUser = (e) => {
    e.preventDefault();
    onChnagesArray(user);
    console.log(user);
    setUser({
      name: "",
      lang: "",
      textare: "",
      code: "",
      //   time: new Date(),
    });
  };

  return (
    <form className="form-main" onSubmit={onSubmitedUser}>
      <input
        onChange={onChange}
        name="name"
        type="text"
        placeholder="User Name"
        value={user.name}
      />
      <select onChange={onChange} name="lang">
        <option selected hidden disabled>
          Select Language
        </option>
        <option value="C++">C++</option>
        <option value="java">java</option>
        <option value="javascript">javascript</option>
        <option value="python">python</option>
      </select>
      <textarea
        onChange={onChange}
        name="textare"
        rows="5"
        cols="10"
        value={user.textare}
      >
        Stdi
      </textarea>
      <textarea
        onChange={onChange}
        name="code"
        rows="5"
        cols="10"
        value={user.code}
      >
        Code
      </textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Forms;
