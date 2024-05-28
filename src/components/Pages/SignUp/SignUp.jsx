import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {
  const { createUser, createUserWithGoogle, error, setError } =
    useContext(AuthContext);

  const handleGoogle = () => {
    // createUser with google
    createUserWithGoogle()
      .then(res => {
        console.log(res.user);
        const user = res.user;
        if (user) {
          toast('User Created Successfully');
        }
        const email = { email: user?.email };
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(email),
        });
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      });
  };
  const handleSIgnUp = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email: email };

    console.log(user);

    // create user with email and  password

    createUser(email, password)
      .then(result => {
        console.log(result.user);
        if (result.user) {
          toast('User Created Successfully');
          form.reset();
        }
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(user),
        });
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      });
  };
  return (
    <div className="hero min-h-screen  bg-base-200">
      <div className="hero-content flex-col w-full">
        <div className="text-center ">
          <h1 className="text-2xl font-bold my-5 text-indigo-500">
            SignUp To Your Account now!
          </h1>
        </div>
        <div className="card  shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSIgnUp} className="card-body">
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
                <small className="text-green-500">
                  Already Have An Account?
                  <Link to="/signIn"> SignIn Here....</Link>
                </small>
              </label>
              {<small className="text-red-600">{error}</small>}
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="SignUp Now"
              />
            </div>
            <div>
              <h3 className="text-center text-2xl text-green-400 border-cyan-400 border-t-2 border-b-2 ">
                OR
              </h3>
            </div>
          </form>
          <ToastContainer></ToastContainer>
          <button onClick={handleGoogle} className="btn btn-primary w-96 mt-2">
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
