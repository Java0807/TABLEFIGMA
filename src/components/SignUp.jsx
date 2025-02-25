import "../styles/SignUp.module.css";
import Image from "next/image";
function SingUp() {
  return (
    <div className="all">
      <form action="">
        <h1 id="h1">Get Started Now</h1>
        <div className="inputs">
          <h3>Name</h3>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="inputs">
          <h3>Email address</h3>
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className="inputs">
          <h3>Password</h3>
          <input type="text" placeholder="Name" />
        </div>
        <div className="check">
          <input type="checkbox" />
          <p>I agree to the terms & policy</p>
        </div>
        <button id="singbtn" type="submit">
          <span>Signup</span>
        </button>
        <div className="orhr">
          <hr />
          Or <hr />
        </div>
        <div className="singWith">
          <button>
            <img src="../public/apple.png" alt="" />
            Sign in with Google
          </button>
          <button>
            <img src="../public/apple.png" alt="" />
            Sign in with Apple
          </button>
        </div>
        <div className="haveyouacc">
          <h2 id="h2">
            Have an account?<span>Sign In</span>
          </h2>
        </div>
      </form>
      <div className="bgImg">
        <Image src="/bg.svg" width={1181} height={1042} alt="" />
      </div>
    </div>
  );
}
export default SingUp;
