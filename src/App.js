import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import Home from "./pages/Home";
import SharedLayout from "./pages/SharedLayout";
import SearchResults from "./pages/SearchResults";
import ImageResults from "./pages/ImageResults";
import NewsResults from "./pages/NewsResults";
import VideoResults from "./pages/VideoResults";
import Error from "./pages/Error";

export default function App() {
    const [inputData, setInputData] = useState("");
    const [curTab, setCurTab] = useState("search");
    const [searchData, setSearchData] = useState({});

    const defaultDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
    const [theme, setTheme] = useLocalStorage(
        "theme",
        defaultDark ? "dark" : "light"
    );

    function switchTheme() {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    }

    const navigate = useNavigate();

    useEffect(() => {
        inputData && getJSON(curTab, inputData);
    }, [curTab]);

    async function getJSON(tab, query) {
        try {
            const options = {
                method: "GET",
                headers: {
                    "X-User-Agent": "desktop",
                    "X-Proxy-Location": "US",
                    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
                    "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
                },
            };

            const response = await fetch(
                `https://google-search3.p.rapidapi.com/api/v1/${tab}/q=${query}`,
                options
            );
            const data = await response.json();
            setSearchData(data);
        } catch (err) {
            console.error(err);
        }
    }

    const controlChange = function (e) {
        setInputData(e.target.value);
    };

    const controlSubmit = async function (e) {
        e.preventDefault();
        if (inputData) {
            getJSON(curTab, inputData);
            navigate(`./search/${curTab}`);
        }
    };

    const controlTabChange = function (tab) {
        setCurTab(tab);
    };

    const clearInput = function () {
        setInputData("");
    };

    return (
        <main className="main" data-theme={theme}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            inputData={inputData}
                            controlChange={controlChange}
                            controlSubmit={controlSubmit}
                            clearInput={clearInput}
                            theme={theme}
                        />
                    }
                />
                <Route
                    path="search"
                    element={
                        <SharedLayout
                            inputData={inputData}
                            controlChange={controlChange}
                            controlSubmit={controlSubmit}
                            clearInput={clearInput}
                            switchTheme={switchTheme}
                            theme={theme}
                        />
                    }
                >
                    <Route
                        path="search"
                        element={
                            <SearchResults
                                searchData={searchData}
                                setCurTab={() => controlTabChange("search")}
                            />
                        }
                    />
                    <Route
                        path="image"
                        element={
                            <ImageResults
                                searchData={searchData}
                                setCurTab={() => controlTabChange("image")}
                            />
                        }
                    />
                    <Route
                        path="news"
                        element={
                            <NewsResults
                                searchData={searchData}
                                setCurTab={() => controlTabChange("news")}
                            />
                        }
                    />
                    <Route
                        path="video"
                        element={
                            <VideoResults
                                searchData={searchData}
                                setCurTab={() => controlTabChange("video")}
                            />
                        }
                    />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </main>
    );
}
