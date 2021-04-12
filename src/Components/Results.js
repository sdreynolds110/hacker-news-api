import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import API from "./API";
import Result from "./Result";
import { resultsAction } from "./Actions/Actions";

function Results() {
  const searchHistory = useSelector((state) => state.searchHistory);
  const sortType = useSelector((state) => state.sortType);
  const currentResults = useSelector((state) => state.results);
  const dispatch = useDispatch();

  const currentTerm = searchHistory[0] || "";

  function searchTermByRelevance(term) {
    return function (dispatch) {
      return API.searchByRelevance(term)
        .then((res) => dispatch(resultsAction(res.data.hits)))
        .catch((err) => console.log(err));
    };
  }

  function searchTermByDate(term) {
    return function (dispatch) {
      return API.searchByDate(term)
        .then((res) => dispatch(resultsAction(res.data.hits)))
        .catch((err) => console.log(err));
    };
  }

  useEffect(() => {
    switch (sortType) {
      case "Date":
        dispatch(searchTermByDate(currentTerm));
        break;
      default:
        dispatch(searchTermByRelevance(currentTerm));
    }
  }, [sortType, currentTerm, dispatch]);

  return (
    <>
      {currentResults.map((result) => (
        <Result
          title={result.title}
          storyTitle={result.story_title}
          author={result.author}
          created={result.created_at}
          url={result.url}
          storyURL={result.story_url}
          key={result.objectID}
        />
      ))}
      {currentResults.length === 0 && (
        <>
          <hr />
          <p>No results found for "{currentTerm}"</p>
        </>
      )}
    </>
  );
}

export default Results;