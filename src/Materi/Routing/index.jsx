import { Link } from "react-router-dom";
import './style.css';

const Routing = () => {
    return (
            <div className="navigation">
                <Link to="/"><i className="fa fa-fw fa-home"></i>Home</Link>
                <Link to="/Register"><i className="fa fa-fw fa-user"></i>Register</Link>
                <Link to="/News"><i className="fa fa-fw fa-rss"></i>News</Link>
            </div>           
    )
}
export default Routing;