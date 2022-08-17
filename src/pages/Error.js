import React from "react";
import { Link } from "react-router-dom";

function Error() {
    return (
        <section className="error-section">
            <h1>404</h1>
            <p className="page-not-found">Page not found</p>
            <p className="error-paragraph">
                The page you were looking for could not be found.
            </p>
            <Link to="/" className="back-home-link">
                Back to home
            </Link>
        </section>
    );
}

export default Error;
