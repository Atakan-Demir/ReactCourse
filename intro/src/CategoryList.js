import React, { Component } from 'react'
import { ListGroup, ListGroupItem, } from 'reactstrap'

export default class CategoryList extends Component {
    render() {
        return (
            <div>
                <h3>Category List</h3>
                <ListGroup>
                    <ListGroupItem>Category 1</ListGroupItem>
                    <ListGroupItem>Category 2</ListGroupItem>
                    <ListGroupItem>Category 3</ListGroupItem>
                    <ListGroupItem>Category 4</ListGroupItem>
                    <ListGroupItem>Category 5</ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}
