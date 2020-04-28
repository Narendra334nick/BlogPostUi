import React,{Component} from 'react';
import '../components/addBlog.css'


export class UpdateBlog extends Component {
    
    state = {
        name:"",
        blog:""
    }
    
    submit = (event)=>{
        event.preventDefault();

        console.log('from hadleClick');
        const payload = {
            name:this.state.name,
            blog:this.state.blog
        }
        
        fetch("https://blogpost-ux.herokuapp.com/updateBlog",
            {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),   
            },   
        ).then(res=>{
            console.log('data send successfully');
        }).catch(res=>{
            console.log('unsuccessful attempt');
        })
        // axios({
        //     url:"https://localhost:5000/updateBlog",
        //     method: 'POST',
        //     data: payload
        // })
        //   .then(()=>{
        //       console.log("data send successfully");
        //   })
        //   .catch(()=>{
        //       console.log("error occured");
        //   });
    }

    handleChange = (event)=>{
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]:value
        });
    }
    
    render() {
        return (
            <form onSubmit={this.submit}>
                <table>
                    <tr>
                        <td>
                            Name:
                        </td>
                        <td>
                                <input 
                                className="input"
                            type="text" 
                            name="name"  
                            value={this.state.name}
                            placeholder="Enter name" 
                            onChange={this.handleChange}
                        />
                        </td>
                    </tr>
                    <tr>
                        <td> Your blog:</td>
                        <td>
                                <textarea 
                                className="textarea" 
                            name="blog" 
                            value={this.state.blog}
                            onChange={this.handleChange}
                        />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><button type="submit" className="btn">Update</button></td>
                    </tr>
                </table>

               
                
              
                
                

            </form>
        )
    }
}

export default UpdateBlog