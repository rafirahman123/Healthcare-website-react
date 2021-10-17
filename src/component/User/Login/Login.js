import React from 'react';

const Login = () => {
    return (
        <div>
            <h1 className="m-5">Please Login</h1>
            <form className="w-25 border mx-auto m-5 p-5 rounded shadow-lg">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email adress" id="exampleInputEmail1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-outline-success">Submit</button>
            </form>
            <button type="submit" className="btn btn-outline-info mb-5">Google SignIn</button>
        </div>
    );
};

export default Login;