import React from "react";

const Status = (props) => {
  switch (props.status) {
    case 1:
      return (
        <div className="status">
          <p>Status: Incomplete</p>
        </div>
      );
    case 2:
      return (
        <div className="status">
          <p className="success">Status: Completed</p>
        </div>
      );
    case 3:
      return (
        <div className="status">
          <p className="failure">Status: Failed</p>
          <p>
            Solution: <b>{props.word}</b>
          </p>
        </div>
      );
    default:
      return;
  }
};

export default Status;
