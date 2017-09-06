import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

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
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >
        <AppBar />
          <MenuItem onClick={this.handleClose} containerElement={<Link to="/" />} >Home</MenuItem>
          <MenuItem onClick={this.handleClose} containerElement={<Link to="/second" />} >Second</MenuItem>
        </Drawer>
      </header>
    )

    // <header>
    //   <nav>
    //     <ul>
    //       <li><Link to='/'>Home</Link></li>
    //       <li><Link to='/second'>Second</Link></li>
    //     </ul>
    //   </nav>
    // </header>
  }
}
