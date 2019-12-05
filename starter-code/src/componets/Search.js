import React, { Component } from 'react'

class Search extends Component {

    state = {
        search: ""
    }


    handleInput = (e) => {
        let {value } = e.target;

        this.props.searchOneFood(value);
        console.log('HELLO SEARCH WORD', value);

        this.setState({search: value});

        console.log('after setstate', value);
        
        
    }


    // handleSubmit = (e) => {
    //     e.preventDefault();

    //     this.props.searchOneFood(this.state.search);

    //     console.log('HELLO SEARCH', this.state.search);

    //     this.setState({search: ""})
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Search for food</label>
                    
                    <input 
                            type="search"
                            name="search"
                            className="search"
                            onChange={this.handleInput}
                            value={this.state.search}
                        />

                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}


export default Search;