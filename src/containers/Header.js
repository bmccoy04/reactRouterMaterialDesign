import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

// The Header creates links that can be used to navigate
// between routes.
export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }


  handleToggle = () => this.setState({open: !this.state.open});
  
  handleClose = () => this.setState({open: false});

  render() {
    return (
      <header>
        <AppBar title="Title" 
        onLeftIconButtonTouchTap={this.handleToggle}
        iconElementRight={<FlatButton containerElement={<Link to="/login" />} >Login</FlatButton>}
        />
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >
        <AppBar 
          title="Menu"
          iconElementLeft={<span></span>}          
        />
          <MenuItem onClick={this.handleClose} containerElement={<Link to="/" />} >Home</MenuItem>
          <MenuItem onClick={this.handleClose} containerElement={<Link to="/second" />} >Second</MenuItem>
        </Drawer>
      </header>
    )
  }
}
