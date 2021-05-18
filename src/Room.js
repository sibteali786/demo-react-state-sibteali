import React, { useState } from "react";
import "./Room.css";
/* The variable updatation of isLit if is done by simmple isLit = !isLit then it will update value but not the UI.
This is where Libraries like Reac, Angular etc come in handy.*/

function Room() {
  let [isLit, setLit] = useState(true);
  let [age, setAge] = useState(21);
  // const state = useState(true);
  //   console.log(state);
  // function updateLit() {
  //   console.log("Button Clicked");
  //   setLit(!isLit);
  // }
  // Both ways to define function are same
  // const increaseAge = () => {
  //   console.log("Button Clicked");
  //   setAge(++age);
  // };
  return (
    <div className={`room ${isLit ? "Lit" : "dark"}`}>
      This Room is {isLit ? "Lit" : "Dark"}
      <br />
      Age = {age}
      <br />
      {/* The reason for calling fucntion inside another function (i.e Arrow) is that if we provide this function 
      directly then it will b called upon intializing of the button not on click event   */}
      <button onClick={() => setLit(!isLit)}>Toggle Click</button>
      <br />
      <button
        onClick={() => {
          console.log("Button Clicked");
          setAge(++age);
        }}
      >
        Increase Age
      </button>
    </div>
  );
}

export default Room;
