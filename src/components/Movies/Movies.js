import React from "react";
import Movie from "./Movie/Movie";

const Movies = props => {
    const {movies} = props

    return(
        <div className={'movies'}>
            {movies.map(movie => {
                return <Movie key={movie.ImdbId} {...movie}/>
            })}
        </div>
    )
}

export default Movies