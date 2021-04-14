import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "./Button";
import { searchAction, addHistoryAction } from "./Actions/Actions";

function Searchbar() {
  const term = useSelector((state) => state.searchTerm);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(searchAction(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim() !== "") {
      dispatch(addHistoryAction(term));
      dispatch(searchAction(""));
    }
  };

  return (
    <div className="mt-3">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control form-control-sm mb-1"
          placeholder="Use Keywords Here"
          onChange={handleChange}
          value={term}
        />
        <Button text="Search" />
      </form>
    </div>
  );
}

export default Searchbar;