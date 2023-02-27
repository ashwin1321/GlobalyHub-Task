import React, { useState } from "react";

const form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);

  const phonee = parseInt(phone);

  const data = {
    name,
    email,
    phonee,
    gender,
    hobbies,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Enter your number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label>
          Gender:
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="others"
            checked={gender === "others"}
            onChange={(e) => setGender(e.target.value)}
          />
          Others
        </label>

        <label>
          Hobbies:
          <input
            type="checkbox"
            name="hobbies"
            value="reading"
            checked={hobbies.includes("reading")} // it checks if the value is already present in the array or not
            onChange={(e) => {
              if (e.target.checked) {
                setHobbies([...hobbies, "reading"]);
              } else {
                setHobbies(hobbies.filter((hobby) => hobby !== "reading")); // it filters out the value from the array
              }
            }}
          />
          Reading
          <input
            type="checkbox"
            name="hobbies"
            value="travelling"
            checked={hobbies.includes("writing")}
            onChange={(e) => {
              if (e.target.checked) {
                setHobbies([...hobbies, "writing"]);
              } else {
                setHobbies(hobbies.filter((hobby) => hobby !== "writing"));
              }
            }}
          />
          Travelling
          <input
            type="checkbox"
            name="hobbies"
            value="painting"
            checked={hobbies.includes("painting")}
            onChange={(e) => {
              if (e.target.checked) {
                setHobbies([...hobbies, "painting"]);
              } else {
                setHobbies(hobbies.filter((hobby) => hobby !== "painting"));
              }
            }}
          />
          Listening To Music
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default form;
