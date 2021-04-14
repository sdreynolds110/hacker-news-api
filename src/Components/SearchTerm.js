import React from "react";
import { useDispatch } from "react-redux";

import { addHistoryAction, deleteHistoryAction } from "./Actions/Actions";

function SearchTerm(props) {
  const dispatch = useDispatch();

  return (
    <div className="d-flex mb-2" id={props.index}>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => dispatch(addHistoryAction(props.term))}
      >
        <p>{props.term}</p>
      </div>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => dispatch(deleteHistoryAction(props.index))}
      >
        <p className="delete">
          <i>X</i>
        </p>
      </div>
    </div>
  );
}

export default SearchTerm;