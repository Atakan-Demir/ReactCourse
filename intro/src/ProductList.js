import React, { Component } from 'react'
import { Button, Table } from 'reactstrap'


export default class ProductList extends Component {

    render() {
        return (
            <div>
                <h3>{this.props.info.title}-{this.props.currentCategory}</h3>

                <Table
                >
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Unit Price
                            </th>
                            <th>
                                Quantity Per Unit
                            </th>
                            <th>
                                In Stock
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            this.props.products.map(product => (
                                <tr key={product.id}>
                                    <th scope="row">
                                        {product.id}
                                    </th>
                                    <td>
                                        {product.productName}
                                    </td>
                                    <td>
                                        {product.unitPrice}
                                    </td>
                                    <td>
                                        {product.quantityPerUnit}
                                    </td>
                                    <td>
                                        {product.unitsInStock}
                                    </td>
                                    <td>
                                        <Button color="info" disabled={product.unitsInStock < 1 ? true : false} onClick={() => this.props.addToCart(product)}>Add</Button>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </Table>
            </div>
        )
    }
}
