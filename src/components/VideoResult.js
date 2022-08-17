import React from "react";
import ReactPlayer from "react-player/youtube";
import { BsPlayCircleFill } from "react-icons/bs";

function VideoResult(props) {
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
            {domain === "www.youtube.com" && span.includes("watch") ? (
                <ReactPlayer
                    url={props.data.link}
                    light={true}
                    width="178px"
                    height="100px"
                    style={{
                        marginTop: "1.2rem",
                        borderRadius: "11px",
                        overflow: "hidden",
                    }}
                    playIcon={<BsPlayCircleFill className="video-play-icon" />}
                    onClickPreview={() => {
                        window.location.replace(props.data.link);
                    }}
                />
            ) : (
                <div className="video-placeholder">Video not available</div>
            )}
        </li>
    );
}

export default VideoResult;
