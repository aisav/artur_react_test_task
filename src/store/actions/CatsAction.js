import * as actionType from "./actionTypes";

export const fetchCategoryItems = () => {
  return async dispatch => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/categories");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await response.json();

      dispatch({
        type: actionType.FETCH_CATEGORIES,
        categoryItems: resData
      });
    } catch (err) {
      throw err;
    }
  };
};

export const fetchImages = (catId, page, limit) => {
  return async dispatch => {
    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=${limit}&category_ids=${catId}&page=${page}`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await response.json();

      const isFinalPage = resData.length === 0 ? true : false;

      !isFinalPage
        ? dispatch({
            type: actionType.FETCH_IMAGES,
            images: resData
          })
        : dispatch({
            type: actionType.SET_IS_FINAL
          });
    } catch (err) {
      throw err;
    }
  };
};

export const firstLoadImages = catId => {
  return async dispatch => {
    try {
      const url =         `https://api.thecatapi.com/v1/images/search?limit=10&category_ids=${catId}`
      const response = await fetch(
        url
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await response.json();

      dispatch({
        type: actionType.FIRST_FETCH_IMAGES,
        images: resData
      });
    } catch (err) {
      throw err;
    }
  };
};
