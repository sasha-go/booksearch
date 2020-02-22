import React from 'react';
import './FilterBar';
import './SearchBar.css';
import FilterBar from './FilterBar';

function SearchBar(props) {
	return (
		<div>
			<label htmlFor="SearchBar">Search:</label> 
			<input type="text" id="SearchBar" name="SearchBar"></input>
			<input type="submit" value="Search"></input>
			<FilterBar />
		</div>
	)
}

export default SearchBar;
