import React, { Component } from 'react'
import { connect } from 'react-redux';

class Counter extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.counter}</h1>
            </div>
        )
    }
}

//mapStateToProps fonksiyonu, store'daki state'i component'in props'una bağlar. 
function mapStateToProps(state) {
    return { counter: state.counterReducer }
}


//connect fonksiyonu, mapStateToProps fonksiyonunu alır ve Counter componentini döndürür.
export default connect(mapStateToProps)(Counter);