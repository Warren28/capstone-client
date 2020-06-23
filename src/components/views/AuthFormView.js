import React from "react";

const AuthFormView = props => {
  const { name, displayName, handleSubmit, error, handleChange, isLoggedIn, userEmail } = props;

  return (
    <div>
      {isLoggedIn ? `The current logged in user is: ${userEmail}` : "No login"}
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email">
            <small></small>
          </label>
          
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
            </div>
            <input name="email" type="text" class="form-control" placeholder="foobar@xyz.com" onChange={handleChange}/>
          </div>
          
          {/* <input name="email" type="text" onChange={handleChange} /> */}
        </div>
        <div>
          <label htmlFor="password">
            <small></small>
          </label>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">Password</span>
            </div>
            <input name="password" type="password" class="form-control" placeholder="password" onChange={handleChange}/>
          </div>
          {/* <input name="password" type="password" onChange={handleChange} /> */}
        </div>
        <div>
          <button type="submit" class="btn btn-success">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  );
};

export default AuthFormView;