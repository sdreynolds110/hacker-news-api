import { combineReducers } from "redux";

import viewSearchReducer from "./viewSearch";
import searchTermReducer from "./searchTerm";
import searchHistoryReducer from "./searchHistory";
import resultsReducer from "./resultsReducer";

const allReducers = combineReducers({
  viewSearch: viewSearchReducer,
  searchTerm: searchTermReducer,
  searchHistory: searchHistoryReducer,
  results: resultsReducer,
});

export default allReducers;