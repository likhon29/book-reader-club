import React from "react";
import "./Break.css";
const Break = (props) => {
    const { handleBreakTime } = props;
  return (
    <div>
      <h2>Add a Break</h2>
      <div className="break-time">
        <button onClick={()=>handleBreakTime(10)}>
          10m
        </button>
        <button onClick={()=>handleBreakTime(20)}>
          20m
        </button>
        <button onClick={()=>handleBreakTime(30)}>
          30m
        </button>
        <button onClick={()=>handleBreakTime(45)}>
          45m
        </button>
        <button onClick={()=>handleBreakTime(60)}>
          60m
        </button>
      </div>
    </div>
  );
};

export default Break;
