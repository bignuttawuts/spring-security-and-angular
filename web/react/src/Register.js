import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-4 is-offset-8">
            <div className="card">
              <div className="card-content">
                <h1 className="title">Register</h1>
                <div className="field">
                  <label className="label">Firstname</label>
                  <div className="control">
                    <input className="input" type="text" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Lastname</label>
                  <div className="control">
                    <input className="input" type="text" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className="input" type="text" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input className="input" type="password" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Confirm Password</label>
                  <div className="control">
                    <input className="input" type="password" />
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <button class="button is-link">Sign up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;