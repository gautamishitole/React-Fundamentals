import { CourseTypes } from "../constants/course-types"
const initialCourseState = {
    courses : [],
};

export const courseReducer= (state = initialCourseState, {type,payload}) => {
    switch(type ) {
        case CourseTypes.SET_COURSES:
            return { ...state, courses: payload};
        default:
            return state;
    }

};