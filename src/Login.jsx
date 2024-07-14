import './Style.css';

function Login() {
  return(
    <div className="container">
      <div className="left"></div>

      <div className="right">
        <h1>Happening now</h1>
        <h2>Join today.</h2>

        <a className="data-collate" href="#">Sign up with Google</a>
        <a className="data-collate" href="#">Sign up with Apple</a>

        <div className="hr-cont">
          <hr />
          <span>or</span>
          <hr />
        </div>

        <a className="create-link" href="#">Create Account</a>

        <span className="by-sign" id="by-sign">
          By signing up, you agree to the <a>Terms of Service</a> and <a>Privacy Policy</a>, including <a>Cookie Use</a>.
        </span>

        <h1 className="already">Already have an account?</h1>

        <a className="sign-in-button" href="#">Sign in</a>
      </div>

      <div className="footer"></div>
    </div>
  );
}

export default  Login;