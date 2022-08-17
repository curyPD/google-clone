import React from "react";

function ImageResult({ data: { image, link } }) {
    const { domain: domainText } = link;
    const title = domainText.slice(0, domainText.indexOf("   "));
    const domain = domainText.slice(domainText.indexOf("   ")).trim();

    return (
        <figure className="image-result">
            <img
                src={image.src}
                alt={image.alt}
                className="image-result__image"
            />
            <figcaption>
                <a
                    href={link.href}
                    target="_blank"
                    className="image-result__link"
                >
                    <p className="image-result__title">{title}</p>
                    <p className="image-result__domain">{domain}</p>
                </a>
            </figcaption>
        </figure>
    );
}

export default ImageResult;
