import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import BookDetails from './BookDetails/BooksDetails';
import PageNotFound from './PageNotFound';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookResults: [], //this is all results from the API
      displayResults: ['hi'], //this the actual displayed results
      //
    }
  }

//set initial details
handleSearch = (searchParam) => {
  //const url: ;
  //const key: AIzaSyAJIFqolUAUDnsmTAB-v-iwbd5oLsOD2uY;
  

  // fetch(url)
  //.then(response => {
    //response.json().then(data => {
  // this.setState({bookDetails:data})     do something with your data
  //});
  //})
}

//will take in the search params
filterResults = (sortParam) => {
  const results = this.state.bookResults.filter(book => book.genre===sortParam);
  this.setState({
    displayResults: results
  })
}
//sort should have a base state that will return all results



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
            <Route exact path='/' render={(props) => <Home displayResults={this.state.displayResults}/>}/>
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