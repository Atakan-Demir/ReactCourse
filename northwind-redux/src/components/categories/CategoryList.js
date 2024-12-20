import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as categoryActions from '../../redux/actions/categoryActions'
import * as productActions from '../../redux/actions/productActions'
import { Badge, ListGroup, ListGroupItem } from 'reactstrap'

class CategoryList extends Component {


    componentDidMount() {
        this.props.actions.getCategories()
    }


    selectCategory = (category) => {
        this.props.actions.changeCategory(category)
        this.props.actions.getProducts(category.id)
    }

    render() {
        return (
            <div>
                <h3>Category <Badge>{this.props.categories.length}</Badge></h3>
                <ListGroup>
                    <ListGroupItem
                        id='0'
                        active={'0' === this.props.currentCategory.id}
                        onClick={() => this.selectCategory({
                            id: '0',
                            categoryName: 'All',
                            seoUrl: 'all'
                        })}>
                        All
                    </ListGroupItem>
                    {
                        this.props.categories.map(cat => (
                            <ListGroupItem
                                key={cat.id}
                                onClick={() => this.selectCategory(cat)}
                                active={cat.id === this.props.currentCategory.id}>
                                {cat.categoryName}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>

            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
            changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
            getProducts: bindActionCreators(productActions.getProducts, dispatch),
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);