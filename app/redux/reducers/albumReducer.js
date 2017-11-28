/**
* The Album reducer
*/
const albumReducer = (state = {},action) => {
  switch (action.type) {
    case "ALBUM_LOAD_ALBUMS":
      state = {
        ...state,
        ...action.payload
      }
      break;
  }
  return state;
};
export default albumReducer;
