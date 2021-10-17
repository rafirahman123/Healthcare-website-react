import React from 'react';


const Registration = () => {

    return (
        <div>
            <h1 className="m-5 text-info ">Register here</h1>
            <form className="w-25 border mx-auto m-5 p-5 rounded shadow-lg">
                <div className="mb-3">
                    <label for="exampleInputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputName" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email adress" />

                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Resubmit Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password again" />
                </div>

                <button type="submit" className="btn btn-outline-success">Submit</button>
            </form>
        </div>
    );
};

export default Registration;