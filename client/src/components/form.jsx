import React, { useState } from "react";

const form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);

  return <div>form</div>;
};

export default form;
