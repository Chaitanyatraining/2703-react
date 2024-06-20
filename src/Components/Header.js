import { Link } from "react-router-dom"
import ClassComp from "./ClassComp"

const Header = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/countcomp' className="nav-link" href="#">CountApp</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/listkeys" className="nav-link" href="#">ListsandKeys</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/lifecycle" className="nav-link" href="#">lifecycle</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/pagination" className="nav-link" href="#">Pagination</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/usestatecounter" className="nav-link" href="#">usestatecounter</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contactus" className="nav-link">ContactUs</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header