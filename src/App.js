import React, { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const [error, setError] = useState(null);
  const [isUserActive, setIsUserActive] = useState(false);
  const onChangeHandler = (event) => {
    setUser(event.target.value);
  };
  const onClickHandler = () => {
    if (user.toLowerCase().charAt(0) !== "a") {
      setError('İstifadəçi adınız "a" hərfi ilə başlamalıdır.');
    } else {
      setIsUserActive(true);
      setError(null);
    }
  };
  return (
    <div className="container">
      {!isUserActive && (
        <>
          <input
            onChange={onChangeHandler}
            value={user}
            placeholder="Enter your name..."
          />
          {error && <div className="error">{error}</div>}
          <button onClick={onClickHandler}>Login</button>
        </>
      )}

      {isUserActive && (
        <>
          <p>Xoş gəldiniz, {user}!</p>
          <button onClick={() => setIsUserActive(false)}> Log out!</button>
        </>
      )}
    </div>
  );
}

export default App;
