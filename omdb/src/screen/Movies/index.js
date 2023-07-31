import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import clsx from 'clsx';

import DefaultLayout from "../../layouts/DefaultLayout";
import { getMovies } from "../../api/movies";
import styles from './Movies.module.scss';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("Man");
    const [activePage, setActivePage] = useState(1);
    const [totalResult, setTotalResult] = useState(0);    

    useEffect(() => {
        // searchQuery();
        setActivePage(1);
    }, []);

    useEffect(() => {
        callApi();
    },[activePage])
    
    const callApi = async () => {
        await getMovies(query, activePage)
            .then((response) =>{
                setMovies(response.data.Search);
                setTotalResult(response.data.totalResults);
                console.log(response);
                console.log(movies);
            })
            .catch((err) => {
                console.error(err);
            });

    }

    function handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        setActivePage(pageNumber);
    }

    return (
        <DefaultLayout>
            <p>Total Results : {totalResult}</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Pagination
                    itemClass="page-item"
                    linkClass="page-link"
                    //hideNavigation
                    activePage={activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={totalResult}
                    pageRangeDisplayed={5}
                    onChange={handlePageChange}
                />
            </div>
            <div className={clsx(styles.box)}>
                {
                    movies.map((movie, index) => (
                        <div className={clsx(styles.item)}>
                            <p><img src={movie.Poster} /></p>
                            <p>{movie.Title}</p>
                            <p><b>Type :</b> {movie.Type}{" "}</p>
                            <p><b>Year :</b> {movie.Year}</p>
                            <p><b>ImdbID :</b> {movie.imdbID}</p>
                        </div>
                    ))
                }
            </div>
        </DefaultLayout>
    )
}

export default Movies;
// https://codesandbox.io/s/omdb-movie-search-forked-qoko0w?file=/src/Movies.js:3141-3146