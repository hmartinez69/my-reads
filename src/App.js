import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom';

class BooksApp extends React.Component {
    state = {}

    render() {
        return (
            <div className="app">
                <Route exact path="/" component={BookList} />
                <Route path="/search" component={BookSearch} />
            </div>
        )
    }
}

class BookList extends Component {
    render() {
        return (
            <div className="list-books">
                {/* UI code */}
            </div>
        )
    }
}

class BookSearch extends Component {
    render() {
        return (
            <div className="search-books">
                {/* UI code */}
            </div>
        )
    }
}

export default BooksApp