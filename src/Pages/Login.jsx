import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock , faUser} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import"./Login.css"
function Login() {
    return (
    <div className="page-login">
        <form action="">
        <h1>Login</h1>
        <div className="input-login">
            <input type="text" placeholder="User Name" required />
            <FontAwesomeIcon className="custom-icon" icon={faUser} />
        </div>
        <div className="input-login">
            <input type="password" placeholder="Password" required />
            <FontAwesomeIcon className="custom-icon" icon={faLock} />
        </div>
        <div className="remember-login">
            <label>
            <input type="checkbox" /> Remember me
            </label>
            <Link to="#">Forget password?</Link>
        </div>
        <button type="submit" className="btn">
            Login
        </button>
        <div className="register">
        <p>
        {"Don't have an account? "}  <Link to="/signup">Register</Link>
        </p>
        </div>
        </form>
    </div>
    );
}
export default Login;