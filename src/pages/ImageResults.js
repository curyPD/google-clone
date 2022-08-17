import React, { useEffect } from "react";
import ImageResult from "../components/ImageResult";

function ImageResults(props) {
    useEffect(() => {
        props.setCurTab();
    }, []);
    const images = props.searchData?.image_results?.map((result, i) => {
        return <ImageResult key={i} data={result} />;
    });
    return <section className="image-results">{images}</section>;
}

export default ImageResults;
