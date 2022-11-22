import React from "react";
import { ReactDOM } from "react-dom";
import CourseDetails from "../CourseDetails";
import {render} from '@testing-library/react';

it("renders CourseDetails",() => {
    const div = document.createElement("div");
    render(<CourseDetails></CourseDetails>)
});