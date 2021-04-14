const resultsReducer = (state = [], action) => {
    switch (action.type) {
      case "OVERWRITE_RESULTS":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default resultsReducer;