import React from "react";
import Movie from "./Movie/Movie";

const Movies = props => {
    const {movies = []} = props

    return(
        <div className={'movies'}>
            {movies.length ? movies.map(movie => {
                return <Movie key={movie.ImdbId} {...movie}/>
            }) : <h4>Nothing found</h4>}
        </div>
    )
}

export default Movies