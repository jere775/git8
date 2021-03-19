import React from 'axios';
import axios from 'react';

class Form extends React.Component {
    userNameInput = React.createRef();

    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`http://api.github.com/users/${this.userNameInput.current.value var console: ConsoleInput.current.value}`);
        console.log(resp);
        // Code I want to excute
    } 
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Github username" username ref={this.userNameInput} required></input>
                <button>Add card</button>
            </form>
        )
    }
}
export default Form;