import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increaseByTwoCounter } from '../redux/actions/counterActions'

class IncreaseByTwoCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e => {
                    // dispatch fonksiyonu, action'ı tetikler.
                    this.props.dispatch(increaseByTwoCounter())
                }
                }>2 arttır</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(increaseByTwoCounter, dispatch)
    }
}


export default connect(mapDispatchToProps)(IncreaseByTwoCounter);