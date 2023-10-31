import {Link} from 'react-router-dom';

function Navbar(props) {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Outfit Oracle
          </Link>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                Shopping Cart
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

export default Navbar;