import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div class="card">
          <div class="card-content">
            <p class="title">Home Page</p>
            <p class="subtitle">Just show a list of user</p>
            <table className="table is-fullwidth">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Keaw</td>
                  <td>A</td>
                  <td>keaw@mail.com</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>John</td>
                  <td>Doe</td>
                  <td>john.doe@mail.com</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Chai</td>
                  <td>R</td>
                  <td>chai.r@mail.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
