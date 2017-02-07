var React = require('react');
var ReactDOM = require('react-dom');

var SayHi = React.createClass({
	render: function() {
		return <div>Hello {this.props.name}</div>;
	}
});

ReactDOM.render(
	<SayHi name="World" />,
	document.getElementById('react-container')
);