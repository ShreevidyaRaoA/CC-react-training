import React, { Component } from "react";

class Form extends Component{

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email:'',
            phonenumber: ''
            
        }
    }
handleUsernameChange = (event) => {
    this.setState({
        username: event.target.value
    })
}

handleEmailidChange = event => {
    this.setState({
        email: event.target.value
    })
}

handlePhonenumberChange = event => {
    this.setState({
        phonenumber: event.target.value
    })
}

    handleSubmit = event =>{
        alert(`${this.state.username} ${this.state.email} ${this.state.phonenumber}`)
        event.preventDefault()
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
               <label>Username</label>
               <input type = "text" required value = {this.state.username}
                onChange = {this.handleUsernameChange}
               />
            </div> 
            <div>
                <label>Email</label> 
                <input type = "email" required value = {this.state.email}
                onChange = {this.handleEmailidChange}
                />
           </div>
            <div>
                <label>Pnonenumber</label> 
                <input type = "tel" required maxlength="10" pattern="\d{10}" title="Please enter exactly 10 digits" pattern="[1-9]{1}[0-9]{9}" value = {this.state.phonenumber}
                onChange = {this.handlePhonenumberChange}
                />
           </div>
           
         <button type="submit">Submit</button>
         </form>
        )
    }
    
}
export default Form