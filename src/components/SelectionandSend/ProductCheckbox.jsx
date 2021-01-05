import React, {Component} from 'react';


class ProductCheckbox extends Component{

    constructor(props){
        super(props);
       this.state = {
            isChecked : false,
            selectedProduct: []
     }
    }
    onChange = e => {
        const selectedProduct = [...this.state.selectedProduct];
        this.setState({[e.target.name] : e.target.checked});
        selectedProduct.push({
            id: e.target.id,  value: e.target.id
        })
        this.setState({
            selectedProduct
        },
        () => {
            console.log(this.state);
        }
        );   
    }
 

    render(){
        const {isChecked} = this.state;
        return(
            <div>
                <p>Checked: {isChecked ? <p>{this.props.productSelected}</p> : "No"}</p>
                <input type="checkbox"
                       checked={isChecked}
                       name="isChecked"
                       id= {this.props.productSelected}
                       onChange={this.onChange}

                ></input>

            </div>
        )
    }
}
export default ProductCheckbox;