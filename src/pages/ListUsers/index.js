import React, { Component } from "react";
import NavBar from "../../Components/NavBar";

export default class ListUsers extends Component {

    constructor(props) {
      super(props);
      this.state = {
        items: []
      };
    }
  
    componentDidMount() {
        fetch("https://reqres.in/api/users?page=2")
          .then(res => res.json())
          .then(parsedJSON => parsedJSON.data.map(item => (
            {
              id: `${item.id}`,
              email: `${item.email}`,
              firstName: `${item.first_name}`,
              lastName: `${item.last_name}`,
              image: `${item.avatar}`,
  
            }
          )))
          .then(items => this.setState({
            items,
            isLoaded: false
          }))
          .catch(error => console.log('parsing failed', error))
      }
  
      render() {
        const {items } = this.state;
          return (
            <div class="p-3 mb-2 bg-dark text-white">
            <div className="boxWhite">
            </div>
            <NavBar />
              <h2>List Users</h2>
              <br />
              {
                items.length > 0 ? items.map(item => {
                const {id, email, firstName, lastName,  image} = item;
                 return (
  
                 <center><div key={id} className="bgCircle">
                 <img src={image} alt={firstName} className="rounded"/> 
                 <br />
                 <div className="ctr">
                    {firstName} {lastName} <br />
                    <h6>{email}</h6> <br />
                  </div>
                </div>
                </center>
                );
              }) : null
            }
            </div>
            
          );
  
      }
    }
  