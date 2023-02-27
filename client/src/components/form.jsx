import React, { useState } from "react";
import axios from "axios";

const form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [hobbiesError, setHobbiesError] = useState("");

  const data = {
    name,
    email,
    phone,
    gender,
    hobbies,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/form/submit-form", data).then((res) => {
      if (res.data.error) {
        console.log(res.data.error);
        if (res.data.error[0].param === "name") {
          setNameError(res.data.error[0].msg);
        }
        if (res.data.error[0].param === "email") {
          setEmailError(res.data.error[0].msg);
        }
        if (res.data.error[0].param === "phone") {
          setPhoneError(res.data.error[0].msg);
        }

        if (res.data.error[0].param === "gender") {
          setGenderError(res.data.error[0].msg);
        }

        if (res.data.error[0].param === "hobbies") {
          setHobbiesError(res.data.error[0].msg);
        }
        return;
      }
      alert(`Success: ${res.data.message}`);
      window.location.reload(false);
    });
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
        <p style={{ color: "red" }}>{nameError}</p>

        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <p style={{ color: "red" }}>{emailError}</p>

        <input
          type="number"
          placeholder="Enter your number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <p style={{ color: "red" }}>{phoneError}</p>

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
        <p style={{ color: "red" }}>{genderError}</p>

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
        <p style={{ color: "red" }}>{hobbiesError}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default form;
