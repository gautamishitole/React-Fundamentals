import { AuthorTypes } from "../constants/author-type"
const initialCourseState = {
    authors : [],
};

export const authorReducer= (state = initialCourseState, {type,payload}) => {
    switch(type ) {
        case AuthorTypes.SET_AUTHORS:
            return { ...state, authors: payload};
        case AuthorTypes.FETCH_AUTHORS:
            return { ...state, authors: payload};
        default:
            return state;
    }

};