import React from 'react';
import { connect } from 'react-redux'
import { getUsersRequest } from '../actions/users'

class App extends React.Component {
    constructor(props){
        super(props)

        this.props.getUsersRequest()
    }

    render() {
        return (
            <div>I'm running</div>
        )
    }
}

export default connect(({users}) => ({users}), {
    getUsersRequest
})(App)