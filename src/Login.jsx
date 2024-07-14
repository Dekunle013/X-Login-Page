import './Style.css';

function Login() {
  return(
    <div className="container">
      <div className="left"></div>

      <div className="right">
        <h1 className="happening-he">Happening now</h1>
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

        <h3 className="already">Already have an account?</h3>

        <a className="sign-in-button" href="#">Sign in</a>
      </div>

      <div className="footer">
        <div>
          <a href="#">About</a>
          <a href="#">Download the X app</a>
          <a href="#">Help Center</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Accessibility</a>
          <a href="#">Ads info</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
          <a href="#">Brand Resources</a>
          <a href="#">Advertising</a>
          <a href="#">Marketing</a>
        </div>

        <div>
          <a href="#">X for Business</a>
          <a href="#">Developers</a>
          <a href="#">Directory</a>
          <a href="#">Settings</a>
          <a href="#">&copy; 2024 X Corp</a>
          <a href="#"></a>
        </div>
      </div>
    </div>
  );
}

export default  Login;