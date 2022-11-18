import { CourseTypes } from "../constants/course-types";
import storeApis from "../../apis/storeApis";


export const fetchCourses = () =>  async (dispatch) => {
        const response = await storeApis.get("/courses/all");

        dispatch({type: CourseTypes.FETCH_COURSES, payload: response.data.result} );
   
};

export const setCourses = (courses) => {
    return {
        type: CourseTypes.SET_COURSES,
        payload: courses,

    };
};