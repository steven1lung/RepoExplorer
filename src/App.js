import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [showname, setShowname] = useState("");
  const [user, setUser] = useState("");
  const [repos, Setrepos] = useState("");

  const submit = () => {
    // alert(username);

    axios.get(`https://api.github.com/users/${username}/repos`).then((res) => {
      setShowname(username);
      console.log(res.data.length);
    });
  };

  const setData = ({}) => {};

  const handlesubmit = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <div className="navbar">{`Repo Explorer   ${showname}`}</div>
      <div className="search">
        <input placeholder="Github User" name="name" onChange={handlesubmit} />
        <button onClick={submit}>Search</button>
      </div>
    </div>
  );
}
export default App;
