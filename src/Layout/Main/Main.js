import React, {Component} from "react";
import Movies from "../../components/Movies/Movies";
import Preloader from '../../components/Preloader/Preloader'
import Search from "../../components/Search/Search";

class Main extends Component{
    state = {
        movies: [],
        loading: true
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=886a24b4&s=Hollywood&page=1')
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    searchMovies = (searchString, type = 'all') => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=886a24b4&s=${searchString}&page=1&type=${type !== 'all' ? type : ''}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
        console.log(type)
    }

    render(){
        const {movies, loading} = this.state
        return (
            <main className={'container content'}>
                <Search searchMovies={this.searchMovies}/>
                {
                    loading ? <Preloader/> : <Movies movies={movies}/>
                }

            </main>
        )
    }
}

export default Main

