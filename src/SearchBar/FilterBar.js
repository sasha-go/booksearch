import React from 'react';
import './FilterBar.css';

function FilterBar() {
	return (
		<div>
			{/* Print Type */}
			<label htmlFor="PrintType">Print Type:</label>
			<select id="PrintType">
				<option value="ebook">Ebook</option>
				<option value="print">Print</option>
			</select>

			{/* Book Type  */}
			<label htmlFor="BookType">Book Type:</label>
			<select id="BookType">
				<option value="Science Fiction">Science Fiction</option>
				<option value="Non-Fiction">Non-Fiction</option>
			</select>
		</div>
	)
}

export default FilterBar;
