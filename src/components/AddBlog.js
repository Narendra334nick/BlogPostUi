import React, { Component } from 'react'
import axios from 'axios';
import '../components/addBlog.css'
// https://blogpost-ux.herokuapp.com/addBlog

export class AddBlog extends Component {
    
    state = {
        name:"",
        date:"",
        blog:""
    };

    handleChange = (event)=>{
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]:value
        });
    }

    submit =(event)=>{
        
        event.preventDefault();

        const payload = {
            name:this.state.name,
            date:this.state.date,
            blog:this.state.blog
        }
        console.log(payload);

        axios({
            url:"https://blogpost-ux.herokuapp.com/addBlog",
            method: 'POST',
            data: payload
        })
          .then(()=>{
              console.log("data send successfully");
          })
          .catch(()=>{
              console.log("error occured");
          });
    };

    render() {
        // console.log('state',this.state);
       
        return (
        <div className="main-div">

           <div className="child">
                <div>
                   
                    <form onSubmit={this.submit}>
                      <table>
                          <tr>
                              <td>Name:</td>
                              <td><input 
                              className="input"
                            type="text" 
                            name="name"  
                            value={this.state.name}
                            placeholder="Enter name" 
                            onChange={this.handleChange}
                        /></td>
                          </tr>

                            <tr>
                                <td> Date:</td>   
                                <td><input className="input"
                            name="date"
                            type="text"
                            value={this.state.date}
                            placeholder="Enter date"
                            onChange={this.handleChange}
                            ></input></td> 
                            </tr>      

                            <tr>
                                <td> Your blog:</td>
                                
                             <td> 
                       <textarea  
                       className="textarea"
                            name="blog" 
                            value={this.state.blog}
                            onChange={this.handleChange}
                        ></textarea></td>
                                </tr>  
                                 
                                <tr>
                                    <td></td>
                                    <td><center><button className="btn" type="submit">submit</button></center></td>
                                </tr>                 
                      </table>

                        
                      

                        
                       
                        
                        
                        

                    </form>
                </div>
           </div>
        
        </div>
        )
    }
}

export default AddBlog
