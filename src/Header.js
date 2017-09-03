import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar } from 'material/lib/app-bar'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <AppBar title="Title"
  />
  // <header>
  //   <nav>
  //     <ul>
  //       <li><Link to='/'>Home</Link></li>
  //       <li><Link to='/second'>Second</Link></li>
  //     </ul>
  //   </nav>
  // </header>
)

export default Header