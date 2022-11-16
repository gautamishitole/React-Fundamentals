import { CourseTypes } from "../constants/course-types";

export const setCourses = (courses) => {
    return {
        type: CourseTypes.SET_COURSES,
        payload: courses,

    };
};