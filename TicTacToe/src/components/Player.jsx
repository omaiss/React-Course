import { useState } from "react";

export default function Player({ name, symbol, isActive, onUpdateName }) {
  const [userName, set_username] = useState(name);
  const [updateName, set_update_name] = useState(false);
  function update_name() {
    set_update_name((val) => !val);
    if (updateName) {
      onUpdateName(symbol, userName);
    }
  }

  function handleNameChange(event) {
    console.log(event.target.value);
    set_username(event.target.value);
  }

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {!updateName ? (
            <span className="player-name">{userName}</span>
          ) : (
            <input
              onChange={handleNameChange}
              value={userName}
              required
              className="player-name"
            />
          )}
          <span className="player-Symbol">{symbol}</span>
        </span>
        <button onClick={update_name}>{!updateName ? "Edit" : "Save"}</button>
      </li>
    </>
  );
}
