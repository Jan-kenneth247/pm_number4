import React, { Component } from 'react';

class Dashboard extends Component {
constructor(props) {
super(props);
}
render() {
return (
<div>
<h1>Welcome! {this.props.first} {this.props.second}</h1>
</div>
);
}
}
export default Dashboard;