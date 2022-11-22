import { authorReducer,
    initialCourseState
} from "../authorReducer";
import { AuthorTypes } from "../../constants/author-type";
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Author Reducers testing', () => {
it('should return the initial state',() => {
    const authors = [];
    expect(authorReducer(undefined,{type: AuthorTypes.SET_AUTHORS,
    payload: authors})).toBeCalled;

});
});