import React from "react";
import { ReactDOM } from "react-dom";
import Header from "../Header";
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it("renders Headers with name",() => {
   const {getByTestId} = render(<Header></Header>)
   expect(getByTestId('header')).toHaveTextContent('Gautami Shitole');

});