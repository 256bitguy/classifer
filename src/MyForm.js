import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
 
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
    }
 
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
 
    handleSubmit = (event) => {
        alert('A form was submitted: ' + this.state);
 
        fetch('http://localhost:3000/', {
            method: 'POST',
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state)
        }).then(function(response) {
            console.log(response)
            return response.json();
        });
 
        event.preventDefault();
    }
 
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                 
                    
                    <TextField id="outlined-basic"   variant="outlined"  value={this.state.value} onChange={this.handleChange} sx={{
        '& > :not(style)': { m: 2, width: '125ch' },
      }}/><br/>
                    {/* <input type="text" name="name"  /> */}
                
                <Button placeholder='i.e text' type="submit" value="Submit" variant="contained">Classify</Button>
                
            </form>
        );
    }
}
export default MyForm;