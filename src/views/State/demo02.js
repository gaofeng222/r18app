import { useState, useEffect } from "react";
function State() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [fullName, setFullName] = useState("");
  function handleChangeFirstName(e) {
    setFirstName(e.target.value);
  }
  function handleChangeLastName(e) {
    setLastName(e.target.value);
  }
  // useEffect(() => {
  //   setFullName(`${firstName} ${lastName}`);
  //   return () => {};
  // }, [firstName, lastName]);
  const fullName = `${firstName} ${lastName}`;
  return (
    <>
      姓:{" "}
      <input type="text" value={firstName} onChange={handleChangeFirstName} />{" "}
      <br />
      名: <input
        type="text"
        value={lastName}
        onChange={handleChangeLastName}
      />{" "}
      <br />
      全名: {fullName}
    </>
  );
}

export default State;
