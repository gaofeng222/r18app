import { useState } from "react";
function FullName() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = firstName + " " + lastName;
  return (
    <>
      <h1>fullname:{fullName}</h1>

      <label>
        First Name :
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>

      <br />
      <label>
        Last Name :
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
    </>
  );
}

export default FullName;
