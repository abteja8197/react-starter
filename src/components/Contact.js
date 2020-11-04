import React, { useState } from "react";

function Contact() {
  const [val, setVal] = useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Here is the text you entered ${val}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Frirst Name:
        <input
          type="text"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Contact;