import CatsReducer from "./CatsReducer";
import * as actionType from "../actions/actionTypes";

describe("cats reducer", () => {
  it("should return the initial state", () => {
    expect(CatsReducer(undefined, {})).toEqual({
      categories: null,
      images: [],
      isFinalPage: false
    });
  });

  it("should store the categories", () => {
    expect(
      CatsReducer(
        {
          categories: null,
          images: [],
          isFinalPage: false
        },
        {
          type: actionType.FETCH_CATEGORIES,
          categoryItems: "some category array"
        }
      )
    ).toEqual({
      categories: "some category array",
      images: [],
      isFinalPage: false
    });
  });

  it("should store the images at first load", () => {
    expect(
      CatsReducer(
        {
          categories: null,
          images: [],
          isFinalPage: false
        },
        {
          type: actionType.FIRST_FETCH_IMAGES,
          images: "some image array"
        }
      )
    ).toEqual({
      categories: null,
      images: "some image array",
      isFinalPage: false
    });
  });
  it("should store the images onPress more button", () => {
    expect(
      CatsReducer(
        {
          categories: null,
          images: [],
          isFinalPage: false
        },
        {
          type: actionType.FETCH_IMAGES,
          images: "some image array"
        }
      )
    ).toEqual({
      categories: null,
      images: ["some image array"],
      isFinalPage: false
    });
  });

  it("should set the isFinalPage to true", () => {
    expect(
      CatsReducer(
        {
          categories: null,
          images: [],
          isFinalPage: false
        },
        {
          type: actionType.SET_IS_FINAL
        }
      )
    ).toEqual({
      categories: null,
      images: [],
      isFinalPage: true
    });
  });
});
