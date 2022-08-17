import React from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";

function SharedLayout(props) {
    return (
        <>
            <SearchBar
                controlSubmit={props.controlSubmit}
                controlChange={props.controlChange}
                inputData={props.inputData}
                clearInput={props.clearInput}
                switchTheme={props.switchTheme}
                theme={props.theme}
            />
            <Outlet />
        </>
    );
}

export default SharedLayout;
