import {fireEvent, render, screen, waitForElement} from "@testing-library/react";
import HistoryItem from "../components/HistoryItem";

test("should render articles", () => {

    render(
        <HistoryItem/>
    );

});