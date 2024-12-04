import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { increaseCounter } from '../redux/actions/counterActions'
import { connect } from 'react-redux'

class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e => {
                    // dispatch fonksiyonu, action'ı tetikler.
                    this.props.dispatch(increaseCounter())
                }}>1 arttır</button>
            </div>
        )
    }
}
//mapDispatchToProps fonksiyonu, store'daki state'i component'in props'una bağlar.
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(increaseCounter, dispatch)
    }
}
//connect fonksiyonu, mapDispatchToProps fonksiyonunu alır ve IncreaseCounter componentini döndürür.
export default connect(mapDispatchToProps)(IncreaseCounter);