let initialState = {
  loading: false,
  data: null,
  
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return {
        ...state,
        loading: true,
        
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.item
      };
    

    default:
      return state;
  }
}

export default reducer;
