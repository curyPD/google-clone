import React, { useEffect } from "react";
import SearchResult from "../components/SearchResult";

function Results(props) {
    useEffect(() => {
        props.setCurTab();
    }, []);

    return (
        <section className="search-results">
            {props.searchData.answers && (
                <>
                    <p className="results-num">
                        About {props.searchData.total?.toLocaleString()} results
                    </p>
                    <ul className="search-results__list">
                        {props.searchData.results?.map((result, i) => (
                            <SearchResult key={i} data={result} />
                        ))}
                    </ul>
                    {props.searchData.answers.length !== 0 && (
                        <>
                            <h2>People also ask</h2>
                            <ul className="popular-searches">
                                {props.searchData.answers?.map((answer, i) => (
                                    <li key={i} className="popular-search">
                                        {answer}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </>
            )}
        </section>
    );
}

export default Results;
