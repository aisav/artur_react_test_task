import * as types from '../actions/actionTypes';
import catsReducer from './index';

describe('Cats Reducer', () => {


    it('Should return new state with all categories', () => {

        const categories = [{"id":5,"name":"boxes"},{"id":15,"name":"clothes"},{"id":1,"name":"hats"},{"id":14,"name":"sinks"},{"id":2,"name":"space"},{"id":4,"name":"sunglasses"},{"id":7,"name":"ties"}]

        const newState = catsReducer(undefined, {
            type: types.FETCH_CATEGORIES,
            categoryItems: categories
        });
        expect(newState.cats.categories).toEqual( categories);

    });

});
