import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

function Header(props) {
	return (
		<div>
			<header>
          <Link to={'/'}>Google Book Search</Link>
      </header>
		</div>
	)
}

export default Header;