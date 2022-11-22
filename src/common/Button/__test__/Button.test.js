import React from "react";
import { ReactDOM } from "react-dom";
import Button from "../Button";
import {render} from '@testing-library/react';

it("renders Buttons",() => {
    const div = document.createElement("div");
    render(<Button></Button>)
});