import { courseReducer } from "../courseReducer";
import { CourseTypes } from "../../constants/course-types";
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Course Reducers testing', () => {
it('should return the initial state',() => {
    const courses = [];
    expect(courseReducer(undefined,{type: CourseTypes.SET_COURSES,
    payload: courses})).toBeCalled;

});
});