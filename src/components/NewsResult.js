import React from "react";
import { BiLinkExternal } from "react-icons/bi";
function NewsResult(props) {
    return (
        <li className="search-result">
            <a href={props.data.link} className="result__link" target="_blank">
                <div className="news__cite-box">
                    <BiLinkExternal className="news__cite-icon" />
                    <cite className="news__cite">
                        {props.data.source.title}
                    </cite>
                </div>
                <h4 className="result__title">{props.data.title}</h4>
            </a>
        </li>
    );
}

export default NewsResult;
