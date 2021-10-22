import React from "react";

const Movie = props => {
    const {
        Title,
        Year,
        ImdbId,
        Type,
        Poster
    } = props
    return(
        <div id={ImdbId} className="card movie">
            <div className="card-image waves-effect waves-block waves-light">
                {Poster === 'N/A' ?
                    <img className="activator" src={`https://via.placeholder.com/468x60?text=${Title}`} />
                    :
                    <img className="activator" src={Poster} />

                }
            </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4">
                    {Title}
                <p>{Year} <span className={'right'}>{Type}</span></p>
                </span>
            </div>
        </div>
    )
}

export default Movie