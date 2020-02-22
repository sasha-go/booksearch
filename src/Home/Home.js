import React from 'react';
import './Home.css';
import BookResults from '../BookResults/BookResults';

function Home(props) {
	return (
		<div>
			<BookResults displayResults={props.displayResults}/>
		</div>
	)
}

export default Home;