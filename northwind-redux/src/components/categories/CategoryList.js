import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as categoryActions from '../../redux/actions/categoryActions'
import { ListGroup, ListGroupItem } from 'reactstrap'

class CategoryList extends Component {


    componentDidMount() {
        this.props.actions.getCategories()
    }


    render() {
        return (
            <div>
                <h3>Category {this.props.categories.length}</h3>
                <ListGroup>
                    <ListGroupItem>
                        All
                    </ListGroupItem>
                    {
                        this.props.categories.map(cat => (
                            <ListGroupItem key={cat.id}>
                                {cat.categoryName}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
                <h5>Cat: {this.props.currentCategory.categoryName}</h5>
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
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);