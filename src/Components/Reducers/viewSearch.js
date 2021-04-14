const viewSearchReducer = (state = true, action) => {
    switch (action.type) {
      case "CLICK_SEARCH":
        return state;
      default:
        return state;
    }
  };
  
  export default viewSearchReducer;