import { useState } from "react";
import "./App.scss";
import Snowflake from "./snowflake.png";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`main1 ${darkMode ? "dark" : "light"}`}>
      {darkMode && (
        <div className="snow">
          {Array.from(Array(2500).keys()).map(() => {
            return <img className="snow-flakes" src={Snowflake} />;
          })}
        </div>
      )}
      <div className="float-end">
        <input
          onChange={() => {
            setDarkMode(!darkMode);
          }}
          type="checkbox"
          class="checkbox"
          id="checkbox"
        />
        <label for="checkbox" class="checkbox-label">
          <i class="fas fa-moon"></i>
          <i class="fas fa-sun"></i>
          <span class="ball"></span>
        </label>
      </div>
    </div>
  );
}

export default App;
