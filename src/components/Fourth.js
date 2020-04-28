import React from 'react'
import '../components/Fourth.css';

export class Fourth extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded:false,
            items:[]
        };
    }
    componentDidMount(){
        fetch("https://blogpost-ux.herokuapp.com/",
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
           fetch("https://blogpost-ux.herokuapp.com/blogDelete/"+id,{
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
                            <div className="div1">
                                <span><i>"{item.blog}" </i></span><button  className="del" id={item._id} onClick={this.clickHandle}>&#10005;</button>
                            </div>

                            
                            <div className="div1"><span><b>~by {item.name}</b></span><span>{item.date}</span></div>
                        </li>
                    ))}
                    </ul>
                    );
                }
             
        
    }
}

export default Fourth
