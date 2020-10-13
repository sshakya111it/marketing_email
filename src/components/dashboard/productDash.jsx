import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import {
    Input
} from 'reactstrap';
import axios from 'axios';
 class ProductDash extends Component{
     constructor(props){
         super(props);
         this.state ={
             products: [],
             filteredProducts: [],
             newProductsData: {
                 title: '',
                 checked: false
             }
         }
    }
    componentDidMount(){
        this._refreshProducts();
    }
    _refreshProducts() {
        axios
        .get('http://3.24.149.94/apis/products')
        .then(res => {
           this.setState({
               products: res.data.results
           });
       });
   }
   render(){
    let result;
    if (this.state.filteredProducts.length !== 0) {
        result = this.state.filteredProducts;
    } else {
        result = this.state.products;
    }
    let products = result.map(product => {
        return (
            <tr key={product.id}>
                <div className='container'>
                    <div className='row'>
                       <td className='col-1'><input type='checkbox' value={product.checked} /></td>
                       <td className='col-2'>{product.title}</td>
                    </div>
                </div>
            </tr>
        );
    });
    return(
            <div>
                <div className='container-fluid'>
                    <div className='row'>
                        <table>
                            <tbody>
                            <Input
                                    type="search"
                                    placeholder="Search product by their names..."
                                    onChange={e => {
                                        this.setState({
                                            filteredProducts: this.state.products
                                            .filter(product => {
                                                return product.title.indexOf(e.target.value) !== -1;
                                            })
                                        });
                                    }}
                                />
                                {products}
                            </tbody>
                        </table>  
                    </div>   
                </div>
            </div>)}
   }
 export default ProductDash