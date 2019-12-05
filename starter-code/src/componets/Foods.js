import React, { Component } from 'react'
import FoodBox from './FoodBox';
import AddNewFood from './AddNewFood';
import Search from './Search';
import foods from '../foods.json';
import shortid from 'shortid';

foods.forEach((food)=> {food.id = shortid.generate()});



class Foods extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            foods: foods,
            filter: foods,
            form: false
        }
    } 
    

    addFood = (foodObj) => {
        const updatedFood =[foodObj, ...this.state.foods];

        this.setState({foods: updatedFood});
    }


    searchOneFood= () => {

        const filterfood = (search) => {this.state.foods.filter( el => el.name.toLowerCase().includes(search.toLowerCase()) > - 1)} 

        console.log('HELLO FILTERFOOD', {filterfood});
        

        this.setState({filter: filterfood})
    }

    


    render() {
        return (
            <div>
                <Search searchOneFood={this.searchOneFood}/>

            

                <AddNewFood addOneFood={this.addFood}/>
            
                {
                this.state.foods.map((foodObj, index) =>{
                    return(
                    <FoodBox key={index} {...foodObj}/>  
                    );
                })  
                };

            </div>
        )
    }
}


export default Foods;