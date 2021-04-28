import React from 'react'
import { useState } from 'react'
import "./App.css"
import MovieList from './MovieList'
import Addmodel from './Addmodel'
import Filter from './Filter'
import Rating from './Rating'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom'


const App = ({movie,setmovie}) => {


    const [rate, setrate] = useState(0);

    const handelrating = (rate) => {
        setrate(rate);

    };
    const [searchTerm, setSearchTerm] = useState("");

    const handleChangeterm = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    const handelMovieAdd = (newValue) => {
        setmovie([...movie, newValue])
    }
    return (
        <div>
            <div className="movie">
                <h1 >Movies</h1>
            </div>
            <div>
                <Filter searchTerm={searchTerm} handleChangeterm={handleChangeterm}></Filter>
            </div>
            <div className="rating">
                <Rating handelrating={handelrating} rate={rate}></Rating>
            </div>
            <div>
                <MovieList movie={movie.filter(elm => elm.title.toUpperCase().trim().includes(searchTerm.toUpperCase().trim()) && elm.rating >= rate)}></MovieList>
            </div>
            <div className="model">
                <Addmodel handelMovieAdd={handelMovieAdd}></Addmodel>
            </div>

        </div>
    )
}
export default App