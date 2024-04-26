import "./styles.css";
import { useState, useEffect } from "react";
import Star from "./star";
export default function App() {
  const [hoverNo, setHoverNo] = useState(0);
  const [divClicked, setDivClicked] = useState(0);
  const [ishover, setisHover] = useState("");
  // let arr = []
  // const [clickedDiv, setClickedDiv] = useState([]);

  // const handleClick = (num) => {
  //   setClickedDiv((clickedDiv) => [...clickedDiv, num]);
  //   if (clickedDiv.length == 9) {
  //     setInterval(() => {
  //       console.log("run", clickedDiv);
  //       setClickedDiv((updatedDiv) => updatedDiv.slice(0, -1));
  //     }, 1000);
  //   }
  // };
  const handleClick = (i) => {
    setisHover(false);
    console.log(i, "clickrd");
    setDivClicked(i);
  };
  const handleHover = (i) => {
    setisHover(true);
    console.log(i, "hover");
    setHoverNo(i);
  };
  const handleOut = () => {
    setHoverNo(0);
  };
  return (
    // <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
    //   {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
    //     return (
    //       <div
    //         onClick={() => handleClick(i)}
    //         style={{
    //           width: "100px",
    //           height: "100px",
    //           border: "1px solid black",
    //           display: "flex",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           ...(clickedDiv.includes(i)
    //             ? { backgroundColor: "red" }
    //             : { backgroundColor: "" }),
    //         }}
    //       >
    //         {i}
    //       </div>
    //     );
    //   })}
    // </div>
    <div style={{ display: "flex", gap: "8px" }} onMouseLeave={handleOut}>
      {[1, 2, 3, 4, 5].map((i) => {
        return (
          <div>
            <Star
              ishover={ishover}
              click={() => handleClick(i)}
              mouse={() => handleHover(i)}
              divClick={divClicked}
              state={hoverNo}
              index={i}
            />
          </div>
        );
      })}
    </div>
  );
}
