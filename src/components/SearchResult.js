import React from "react";

function SearchResult(props) {
    const span = props.data.cite?.span;
    const index = props.data.cite?.domain?.indexOf(span);
    const domain = props.data.cite?.domain?.slice(0, index);
    return (
        <li className="search-result">
            <a href={props.data.link} className="result__link" target="_blank">
                {domain ? (
                    <cite className="result__cite">
                        {domain} <span className="cite__span">{span}</span>
                    </cite>
                ) : (
                    <cite className="result__cite">
                        {props.data.link.slice(0, 40) + "..."}
                    </cite>
                )}
                <h4 className="result__title">{props.data.title}</h4>
            </a>
        </li>
    );
}

export default SearchResult;
