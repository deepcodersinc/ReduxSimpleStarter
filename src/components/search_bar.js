import React, {Component} from 'react';

class SearchBar extends Component {
	constructor() {
		super();

		this.state = {term: ''};
	}

	render() {
		return (
			<div className="search-bar">
				<input					
					onChange={event => this.onInputChange(event.target.value)} />
				<button 
					onClick={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;