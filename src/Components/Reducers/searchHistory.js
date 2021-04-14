const searchHistoryReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_HISTORY":
        let newArr = state.slice();
        newArr.unshift(action.payload);
        return newArr;
      case "DELETE_HISTORY":
        let deleteArr = state.slice();
        deleteArr.splice(action.payload, 1);
        return deleteArr;
      default:
        return state;
    }
  };
  
  export default searchHistoryReducer;