import Axios from "axios";
import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

export default class CustomerList extends Component {
  state = {
    customers: [],
  };
  componentWillMount() {
    axios.get("http://3.24.149.94/apis/customers").then((response) => {
      this.setState({ customers: response.data });
    });
  }
  render() {
    //   let customers=this.state.customers.map((customers)=>{
    //     return (
    //         <tr>
    //         <td>Samrat</td>
    //         <td>Shakya</td>
    //         <td>shakyasamrat@gmail.com</td>
    //         <td>0452586783</td>
    //         <td>Sydney</td>
    //         <td>
    //           <Button variant="success" size="sm" className="mr-2">
    //             Edit
    //           </Button>
    //           <Button variant="danger" size="sm">
    //             Delete
    //           </Button>
    //         </td>
    //       </tr>

    //     )
    //   });
    return (
      <div className="dashboard container">
        <br></br>
        <h2>Customer List</h2>
        <br></br>
        <form>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th >
                <th>Number</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Samrat</td>
                <td>Shakya</td>
                <td>shakyasamrat@gmail.com</td>
                <td>0452586783</td>
                <td>Sydney</td>
                <td>
                  <Button variant="success" size="sm" className="mr-2">
                    Edit
                  </Button>
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Saroj</td>
                <td>Subedi</td>
                <td>subedisarojt@gmail.com</td>
                <td>0123456789</td>
                <td>Sydney</td>
                <td>
                  <Button variant="success" size="sm" className="mr-2">
                    Edit
                  </Button>
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
          <br></br>
        </form>
      </div>
    );
  }
}

// const CustomerList = () => {
//     return (
//         <div className="product-list section">

//             <div className="card z-depth-0 product-summary">
//                 <div className="card-content grey-text text-darken-3">
//                  <span className="card-title">Bishal Mahat</span>
//                  <p> bmahat.111it@gmail.com</p>
//                  <p className="grey-text">025xxxxxx </p>
//                 </div>
//             </div>
//             <div className="card z-depth-0 product-summary">
//                 <div className="card-content grey-text text-darken-3">
//                  <span className="card-title">Jay Thapa</span>
//                  <p>jthapa.111it@gmail.com</p>
//                  <p className="grey-text">025xxxxxx </p>
//                 </div>
//             </div>
//             <div className="card z-depth-0 product-summary">
//                 <div className="card-content grey-text text-darken-3">
//                  <span className="card-title">Samrat Shakya</span>
//                  <p> sshakya.111it@gmail.com</p>
//                  <p className="grey-text">025xxxxxxr </p>
//                 </div>
//             </div>
//         </div>

//     )

// }
// export default CustomerList;
