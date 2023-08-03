import React, { useState, useEffect } from "react";
import clsx from 'clsx';

import DefaultLayout from "../../layouts/DefaultLayout";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import { getMovies } from "../../api/movies";
import styles from './Movies.module.scss';
import Paging from "../../components/Paging";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("Man");
    const [modal, setModal] = useState(false);
    const [activePage, setActivePage] = useState(1);
    const [totalResult, setTotalResult] = useState(0);  
    const [movieDetails, setMovieDetails] = useState({});
    const toggle = () => setModal(!modal);

    useEffect(() => {
        searchQuery();
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
                // console.log(response);
                // console.log(movies);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    function handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        setActivePage(pageNumber);
    }

    function changeQuery(event){
        setQuery(event.target.value);
    }

    function searchQuery(){
        callApi();
    }

    function handleMovie(movie){
        setMovieDetails(movie);
    }

    return (
        <DefaultLayout>
            <h1>Total Results : {totalResult}</h1>
            <div>
                <Input onChange={(e) => changeQuery(e)} default square />
                <Button onClick={()=>searchQuery()}  success square>Search</Button>
            </div>
            <br></br>
            <div className={clsx(styles.box)}>
                { movies && movies.length > 0 &&
                    movies.map((movie, index) => (
                        <div className={clsx(styles.item)} key={index}>
                            <p><img src={movie.Poster} /></p>
                            <p>{movie.Title}</p>
                            <p><b>Type :</b> {movie.Type}{" "}</p>
                            <p><b>Year :</b> {movie.Year}</p>
                            <p><b>ImdbID :</b> {movie.imdbID}</p>
                            <Button 
                                onClick={() => {
                                    toggle();
                                    handleMovie(movie);
                                }}  soutline square
                            >
                                Datails
                            </Button>
                        </div>
                    ))
                }
            </div>
            
            <Paging activePage={activePage} totalResult={totalResult} handlePageChange={handlePageChange} />

            {modal && (
                <Modal modal={modal} toggle={toggle} movie={movieDetails} />             
            )}
        </DefaultLayout>
    )
}

export default Movies;
// https://codesandbox.io/s/omdb-movie-search-forked-qoko0w?file=/src/Movies.js:3141-3146