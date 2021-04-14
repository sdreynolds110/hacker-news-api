import { combineReducers } from "redux";
import viewReducer from "./viewSearch";
import searchReducer from "./searchTerm";
import historyReducer from "./searchHistory";
import resultsReducer from "./resultsReducer";

const allReducers = combineReducers({
  viewSearch: viewReducer,
  searchTerm: searchReducer,
  searchHistory: historyReducer,
  results: resultsReducer,
});

export default allReducers;