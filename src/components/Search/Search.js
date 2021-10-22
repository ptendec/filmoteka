import React, {Component} from "react";

class Search extends Component {
    state = {
        search: '',
        type: 'all'
    }
    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type)
        }
    }
    handleFilter = (event) => {
        this.setState(() => ({type: event.target.dataset.type}),
            () => {this.props.searchMovies(this.state.search, this.state.type)
        })
    }

    render() {
        return (
            <div className="row" style={{position: 'relative'}}>
                <div className="input-field col s12">
                    <input
                        id="filmName"
                        type="text"
                        className="validate"
                        onChange={event => this.setState({search: event.target.value})}
                        onKeyDown={this.handleKey}
                    />
                    <label htmlFor="filmName">Search by film name</label>
                </div>
                <button className="btn search-btn" onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search
                </button>
                <div>
                    <label>
                        <input name="type" data-type="all" type="radio" onChange={this.handleFilter} checked={this.state.type === 'all'}/>
                        <span>All</span>
                    </label><br/>
                    <label>
                        <input name="type" data-type="movie" type="radio" onChange={this.handleFilter} checked={this.state.type === 'movie'}/>
                        <span>Movies</span>
                    </label><br/>
                    <label>
                        <input name="type" data-type="series" type="radio" onChange={this.handleFilter} checked={this.state.type === 'series'}/>
                        <span>Series</span>
                    </label>
                </div>
            </div>
        )
    }
}

export default Search