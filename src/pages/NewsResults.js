import React, { useEffect } from "react";
import NewsResult from "../components/NewsResult";
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

            {/* <ul className="search-results__list">
                {props.searchData.entries?.map((result) => (
                    <NewsResult key={result.id} data={result} />
                ))}
            </ul> */}
        </section>
    );
}

export default NewsResults;
