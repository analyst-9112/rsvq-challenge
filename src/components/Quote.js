import React from "react";
import Vote from "./Vote";

const Quote = (props) => {
  return (
    <li className="list-group-item d-flex row w-100">
      <Vote
        className="col"
        votes={props.votes}
        add={props.add}
        subtract={props.subtract}
      />
      <div className="col">{props.text}</div>
    </li>
  );
};

export default Quote;