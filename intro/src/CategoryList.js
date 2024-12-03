import React, { Component } from 'react'
import { ListGroup, ListGroupItem, } from 'reactstrap'

export default class CategoryList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { categories: [{ categoryId: 1, categoryName: "Beverages" }, { categoryId: 2, categoryName: "Condiments" }, { categoryId: 3, categoryName: "Foods" }] }
    // }
    state = {
        categories: []
    };

    // component yerleştikten sonra çalışır
    componentDidMount() {
        this.getCategories();
    }

    getCategories = () => {
        fetch("http://localhost:3000/categories").then(response => response.json())
            .then(data => this.setState({ categories: data }));


    }

    render() {

        return (
            <div>
                <h3>{this.props.info.title}</h3>

                <ListGroup>
                    {
                        // this.state.categories.map(category => (
                        //     <ListGroupItem key={category.categoryId} onClick={() => this.setState({ currentCategory: category.categoryName })}>{category.categoryName}</ListGroupItem>
                        // ))
                        this.state.categories.map(category => (
                            <ListGroupItem key={category.id} onClick={() => this.props.changeCategory(category)}>{category.categoryName}</ListGroupItem>
                        ))
                    }
                </ListGroup>

                <h4>{this.props.currentCategory}</h4>
            </div>
        )
    }
}
