import React from "react";

class SearchBar extends React.Component{
    state = {term: ''}

    //Event object
    onInputChange = event =>{
        //Update la proprité term en get le event
        this.setState({ term: event.target.value });
    }

    onFormSubmit = event =>{
        //Evite que le form ne refresh tout seul
        event.preventDefault();

        this.props.onFormSubmit(this.state.term)
    }

    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        {/* Utiliser le onChange pour effectuer des actions sur le HTML sinon impossible d'écrire*/}
                        <input 
                            type="text" 
                            // Ce qui est écrit dans le state term
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;