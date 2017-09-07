import React from 'react'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'

export default class Login extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        const divStyle = {
            textAlign: 'center',
        }
        const style = {
            height: 200,
            width: 400,
            marginTop: 10,
            display: 'inline-block',
        }
        return (
            <div style={divStyle}>
                <Paper style={style} zDepth={2}>

                    <TextField
                        hintText="User name"
                        floatingLabelText="User name"
                    />
                    <br/>
                    <TextField
                    hintText="Password Field"
                    floatingLabelText="Password"
                    type="password"
                    />
                    <br />
                    <FlatButton label="Login" fullWidth={true} />
                </Paper>
            </div>
        )
    }
}


