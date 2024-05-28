import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
  const { signInWithGoogle, signInWithEmailAndPass, error, setError } =
    useContext(AuthContext);

  // sign in with google

  const handleSignInGoggle = () => {
    signInWithGoogle()
      .then(res => {
        console.log(res.user);
        if (res.user) {
          toast('User Sign In Successful');
        }
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      });
  };
  // sign in with email and  password
  const handleSignInWithEP = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPass(email, password)
      .then(res => {
        console.log(res.user);
        const user = res.user;
        if (user) {
          toast('Login Successful');
          form.reset();
        }
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
      });
  };

  return (
    <div className="hero min-h-screen  bg-base-200">
      <div className="hero-content flex-col w-full">
        <div className="text-center ">
          <h1 className="text-2xl font-bold my-5 text-indigo-500">
            SignIn To Your Account now!
          </h1>
        </div>
        <div className="card  shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignInWithEP} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
                <br />
              </label>
              <small className="text-green-500">
                New here..? <Link to="/signUp">Create An Account....</Link>
              </small>
              {<small className="text-red-600">{error}</small>}
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="SignIn Now"
              />
            </div>
            <div>
              <h3 className="text-center text-2xl text-green-400 border-cyan-400 border-t-2 border-b-2 ">
                OR
              </h3>
            </div>
          </form>
          <button
            onClick={handleSignInGoggle}
            className="btn btn-primary w-full mt-2"
          >
            Continue With Google
          </button>

          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
