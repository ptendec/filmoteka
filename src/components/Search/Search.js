import React, {Component} from "react";

class Search extends Component{
    state={
        search: '',
    }
    handleKey = (event) => {
        if (event.key === 'Enter'){
            this.props.searchMovies(this.state.search)
        }
    }
    render() {
        return(
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
                <button className="btn search-btn" onClick={() => this.props.searchMovies(this.state.search)}>Search</button>
            </div>
        )
    }
}

export default Search