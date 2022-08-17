import React, { useEffect, useState } from "react";
import NewsResult from "./NewsResult";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function Pagination(props) {
    const resultsPerPage = +process.env.REACT_APP_RESULTS_PER_PAGE;

    const [curPage, setCurPage] = useState(0);
    const [curData, setCurData] = useState(props.data.slice(0, 9));

    useEffect(() => {
        setCurData(
            props.data.slice(
                resultsPerPage * curPage,
                9 + resultsPerPage * curPage
            )
        );
    }, [curPage]);

    const numPages = Math.ceil(props.data.length / resultsPerPage);

    const newsElements = curData.map((result) => (
        <NewsResult key={result.id} data={result} />
    ));

    let paginationButtons = [];

    for (let i = 0; i < numPages; i++) {
        paginationButtons.push(
            <button
                key={i}
                onClick={() => setCurPage(i)}
                className={`pagination__number-btn ${
                    i === curPage ? "pagination__number-btn--active" : ""
                }`}
            >
                {i + 1}
            </button>
        );
    }

    function goBack() {
        setCurPage((prevPage) => prevPage - 1);
    }

    function goForward() {
        setCurPage((prevPage) => prevPage + 1);
    }

    return (
        <>
            <div className="pagination__content-box">
                <ul className="search-results__list">{newsElements}</ul>
            </div>
            <div className="pagination__navigation-box">
                <nav>
                    {curPage !== 0 ? (
                        <button
                            onClick={goBack}
                            className="pagination__arrow-btn"
                        >
                            <BiChevronLeft />
                        </button>
                    ) : (
                        <button
                            onClick={goBack}
                            className="pagination__arrow-btn pagination__arrow-btn--blur"
                        >
                            <BiChevronLeft />
                        </button>
                    )}
                    {paginationButtons}
                    {curPage !== numPages - 1 ? (
                        <button
                            onClick={goForward}
                            className="pagination__arrow-btn"
                        >
                            <BiChevronRight />
                        </button>
                    ) : (
                        <button
                            onClick={goForward}
                            className="pagination__arrow-btn pagination__arrow-btn--blur"
                        >
                            <BiChevronRight />
                        </button>
                    )}
                </nav>
            </div>
        </>
    );
}

export default Pagination;
