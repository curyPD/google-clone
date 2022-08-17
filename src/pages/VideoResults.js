import React, { useEffect } from "react";
import VideoResult from "../components/VideoResult";

function VideoResults(props) {
    useEffect(() => {
        props.setCurTab();
    }, []);

    return (
        <section className="search-results">
            {props.searchData.results && (
                <>
                    <p className="results-num">
                        About {props.searchData.total?.toLocaleString()} results
                    </p>
                    <ul className="search-results__list">
                        {props.searchData.results?.map((result, i) => (
                            <VideoResult key={i} data={result} />
                        ))}
                    </ul>
                </>
            )}
        </section>
    );
}

export default VideoResults;
