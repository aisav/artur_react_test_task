import * as actionType from "../actions/actionTypes";

const initialState = {
  categories: null,
  images: [],
  isFinalPage: false,
  catId: 1,
};

const CatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.categoryItems
      };
    case actionType.FETCH_IMAGES:
      return {
        ...state,
        images: state.images.concat(action.images)
      };
    case actionType.SET_IS_FINAL:
      return {
        ...state,
        isFinalPage: true
      };
    case actionType.FIRST_FETCH_IMAGES:
      return {
        ...state,
        images: action.images
      };
    default:
      return state;
  }
};

export default CatsReducer;
