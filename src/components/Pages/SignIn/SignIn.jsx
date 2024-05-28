import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="hero min-h-screen  bg-base-200">
      <div className="hero-content flex-col w-full">
        <div className="text-center ">
          <h1 className="text-2xl font-bold my-5 text-indigo-500">
            SignIn To Your Account now!
          </h1>
        </div>
        <div className="card  shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
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
                O=R
              </h3>
              <button className="btn btn-primary w-full mt-2">
                Continue With Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
