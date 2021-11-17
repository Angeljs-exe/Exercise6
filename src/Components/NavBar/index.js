import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    {/* <a className="navbar-brand" href="#">
        LOGO
    </a> */}
  <button 
  className="navbar-toggler" 
  type="button" 
  data-toggle="collapse" 
  data-target="#navbarNavAltMarkup" 
  aria-controls="navbarNavAltMarkup" 
  aria-expanded="false" 
  aria-label="Toggle navigation">
    
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto">
        <Link className="nav-link" to="/">Dashboard</Link>
        <Link className="nav-link" to="/ListUsers">ListUsers</Link>
    </div>
  </div>
</nav>
    )
}
