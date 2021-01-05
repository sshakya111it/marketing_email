import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGrades: []
    };
    this.onSelectGrade = this.onSelectGrade.bind(this);
  }
  onSelectGrade(e) {
    const selectedGrades = [...this.state.selectedGrades];
    const grade = selectedGrades.find(x => x.id === e.target.id);
    if (grade) grade.value = e.target.value;
    else selectedGrades.push({ id: e.target.id, value: e.target.value });
    this.setState(
      {
        selectedGrades
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <table>
          <tr>
            <th>Country</th>
          </tr>
          <tr>
            <td>
              <select
                defaultValue="Default"
                id="22"
                onChange={this.onSelectGrade}
              >
                <option disabled value="Default">
                  Choose grade
                </option>
                <option value="1">A</option>
                <option value="2">B</option>
                <option value="3">c</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <select
                defaultValue="Default"
                id="23"
                onChange={this.onSelectGrade}
              >
                <option disabled value="Default">
                  Choose grade
                </option>
                <option value="1">A</option>
                <option value="2">B</option>
                <option value="3">c</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <select
                defaultValue="Default"
                id="24"
                onChange={this.onSelectGrade}
              >
                <option disabled value="Default">
                  Choose grade
                </option>
                <option value="1">A</option>
                <option value="2">B</option>
                <option value="3">c</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <select
                defaultValue="Default"
                id="25"
                onChange={this.onSelectGrade}
              >
                <option disabled value="Default">
                  Choose grade
                </option>
                <option value="1">A</option>
                <option value="2">B</option>
                <option value="3">c</option>
              </select>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}