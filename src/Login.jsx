import './Style.css';

function Login() {
  return(
    <div className="container">
      <div className="left"></div>
      <div className="right">
        <h1>Happening now</h1>
        <h2>Join today.</h2>

        <a href="#">Sign up with Google</a>
        <a href="#">Sign up with Apple</a>

        <div className="hr-cont">
          <hr />
          <span>or</span>
          <hr />
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default  Login;