import React, {Component} from 'react';
//CLASS COMPONENT
class SearchBar extends Component
{
   /* render ()
    {
        return <input onChange = {this.onInputChange}/>;
    }

    onInputChange(event)
    {
        console.log(event.target.value);//To retrive value from search bar
    }*/

    //CAN DO THIS INSTEAD
    constructor (props)
    {
        super(props);

        this.state = { term: '' };
    }

    render ()
    {

    return (
        <div className = "search-bar">
            
            <input 
            value = {this.state.term}
            onChange = { event   => {this.onInputChange(event.target.value)}} 
            />

        </div>
    );
    
    }
    onInputChange(term)
    {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    
}
export default SearchBar;


/*
//FUNCTION COMPONENT
const SearchBar = () =>{
    return <input />;
}
*/