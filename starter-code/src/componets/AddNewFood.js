import React, { Component } from 'react';
import shortid from 'shortid';

class AddNewFood extends Component {

    state = {
        name: "",
        calories: 0,
        image: "",
        id: ""
    }

    handleInput = (e) => {
        let {value, name } = e.target;

        this.setState({[name]: value})
    }


    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addOneFood(this.state);

        // console.log('HELLO NEW FOOD', this.state);
        
        const newFoodId = shortid.generate();

        this.setState({
            name: "",
            calories: 0,
            image: "",
            id: newFoodId
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input
                            onChange={this.handleInput}
                            type="text" 
                            name="name"
                            value={this.state.name}
                        />

                    <label>Calories:</label>
                    <input 
                            onChange={this.handleInput}
                            type="number" 
                            name="calories"
                            value={this.state.calories}
                        />

                    <label>Food Image:</label>
                    <input
                            onChange={this.handleInput}
                            type="text"
                            name="foodImage"
                            value={this.state.image}
                        />

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


export default AddNewFood;