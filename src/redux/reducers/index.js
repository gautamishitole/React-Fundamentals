import { combineReducers } from "redux";
import { authorReducer } from "./authorReducer";
import { courseReducer } from './courseReducer';

const reducers = combineReducers({
    allCourses: courseReducer,
    allAuthors: authorReducer,
});

export default reducers;