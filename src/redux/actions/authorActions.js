import { AuthorTypes } from "../constants/author-type";

export const setAuthors = (authors) => {
    return {
        type: AuthorTypes.SET_AUTHORS,
        payload: authors,

    };
};