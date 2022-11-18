import axios from "axios";
import { AuthorTypes } from "../constants/author-type";
import storeApis from "../../apis/storeApis";

export const fetchAuthors =  () =>   async (dispatch) => {
    
        const response = await storeApis.get("/authors/all");

        dispatch({type: AuthorTypes.FETCH_AUTHORS, payload: response.data.result} );
    
};

export const setAuthors = (authors) => {
    return {
        type: AuthorTypes.SET_AUTHORS,
        payload: authors,

    };
};