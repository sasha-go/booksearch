import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import BookDetails from './BookDetails/BooksDetails';
import PageNotFound from './PageNotFound';


class App extends Component {
	render() {
		return(
			<div>
        <header>
          <Header />
        </header>

        <nav>
          <SearchBar /> 
        </nav>

        <main>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/bookdetails/:bookId' component={BookDetails} />
            <Route path='/' component={PageNotFound} />
          </Switch>
        </main>
			
			</div>

		);
	}
} 


export default App;


//wireframe comp 
// get api to work 