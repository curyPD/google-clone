import React, { useEffect } from "react";
import Pagination from "../components/Pagination";

function NewsResults(props) {
    useEffect(() => {
        props.setCurTab();
    }, []);

    return (
        <section className="search-results">
            {props.searchData.entries && (
                <Pagination data={props.searchData.entries} />
            )}
        </section>
    );
}

export default NewsResults;
