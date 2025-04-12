import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock , faUser, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
    return (
    <div className="page-login">
        <form>
        <h1>Sign Up</h1>
        <div className="input-login">
        <input type="text" placeholder="User Name" required />
            <FontAwesomeIcon className="custom-icon" icon={faUser} />
        </div>
        <div className="input-login">
            <input type="email" placeholder="Email" required />
            <FontAwesomeIcon className="custom-icon" icon={faEnvelope} />
        </div>
        <div className="input-login">
            <input type="password" placeholder="Password" required />
            <FontAwesomeIcon className="custom-icon" icon={faLock} />
        </div>
        <button type="submit" className="btn">Sign Up</button>
        <div className="register">
            <p>
            Already have an account? <Link to="/">Login</Link>
            </p>
        </div>
        </form>
    </div>
    );
}

export default SignUp;
