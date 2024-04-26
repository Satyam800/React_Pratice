import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  let arr = [];
  const [clickedDiv, setClickedDiv] = useState([]);

  const handleClick = (num) => {
    setClickedDiv((clickedDiv) => [...clickedDiv, num]);
    if (clickedDiv.length == 9) {
      setInterval(() => {
        console.log("run", clickedDiv);
        setClickedDiv((updatedDiv) => updatedDiv.slice(0, -1));
      }, 1000);
    }
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
        return (
          <div
            onClick={() => handleClick(i)}
            style={{
              width: "100px",
              height: "100px",
              border: "1px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              ...(clickedDiv.includes(i)
                ? { backgroundColor: "red" }
                : { backgroundColor: "" }),
            }}
          >
            {i}
          </div>
        );
      })}
    </div>
  );
}
