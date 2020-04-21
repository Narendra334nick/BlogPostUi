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
        fetch("http://shielded-wave-97574.herokuapp.com/",
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

    
       deleteData(item) {
            fetch("http://localhost:5000/blogDelete" + '/' + item, {
              method: 'delete'
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
                            {item.name} : {item.blog} <button onClick={()=>this.deleteData(`${item._id}`)}>Delete</button>
                        </li>
                    ))}
                    </ul>
                    );
                }
             
        
    }
}

export default Fourth
