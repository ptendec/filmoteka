import React, {Component} from "react";
import Movies from "../../components/Movies/Movies";
import Preloader from '../../components/Preloader/Preloader'
import Search from "../../components/Search/Search";

class Main extends Component{
    state = {
        movies: [],
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=886a24b4&s=Hollywood&page=1')
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    }

    searchMovies = (searchString, type = 'all') => {
        fetch(`http://www.omdbapi.com/?apikey=886a24b4&s=${searchString}&page=1&type=${type !== 'all' ? type : ''}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
        console.log(type)
    }

    render(){
        const {movies} = this.state
        return (
            <main className={'container content'}>
                <Search searchMovies={this.searchMovies}/>
                {
                    movies.length ? <Movies movies={this.state.movies}/> : <Preloader/>
                }

            </main>
        )
    }
}

export default Main

