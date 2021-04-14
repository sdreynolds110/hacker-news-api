export const viewAction = () => {
    return {
      type: "CLICK_SEARCH",
    };
  };
  
  export const searchAction = (term) => {
    return {
      type: "SEARCH",
      payload: term,
    };
  };
  
  export const addHistoryAction = (term) => {
    return {
      type: "ADD_HISTORY",
      payload: term,
    };
  };
  
  export const deleteHistoryAction = (index) => {
    return {
      type: "DELETE_HISTORY",
      payload: index,
    };
  };
  
  export const resultsAction = (array) => {
    return {
      type: "OVERWRITE_RESULTS",
      payload: array,
    };
  };
  