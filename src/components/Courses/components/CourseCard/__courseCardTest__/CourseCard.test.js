import React from "react";
import { ReactDOM } from "react-dom";
import CourseCard from "../CourseCard";
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('CouseCard', ()=>{
    const onNavigate = jest.fn();

    let wrapper;
    beforeEach(() =>{
        wrapper = <CourseCard- onNavigate={onNavigate}/>
    });
    it("renders Course Card",() => {
        expect(wrapper).not.toBeNull();
     
     });
});
