import React, { Component } from 'react'

export class Fourth extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded:false,
            items:[]
        };
    }
    componentDidMount(){
        fetch("https://shielded-wave-97574.herokuapp.com",
        {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }   
        }
        )
        .then(res=>res.json())
        .then(
            
            (result) => {
                console.log(result);
                this.setState({
                    isLoaded:true,
                    items : result.BlogList
                })
                
            },
            (error)=>{
                this.setState({
                    isLoaded:true,
                    error
                });
            }
        )

    }

    
       clickHandle=(e)=>{
           console.log(e.target.id);
           const id = e.target.id;
           fetch("https://shielded-wave-97574.herokuapp.com/blogDelete/"+id,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            }   
        }).then(response =>
            response.json().then(json => {
              return json;
            })
          );
        }

    render() {
            const { error, isLoaded, items } = this.state;
            if (error) {
                return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
                return <div>Loading...</div>;
            } else {
                return (
                    <ul type="none">
                    {items.map(item => (
                        <li key={item._id}>
                            {item.name} : {item.blog} <button id={item._id} onClick={this.clickHandle}>Delete</button>
                        </li>
                    ))}
                    </ul>
                    );
                }
             
        
    }
}

export default Fourth
