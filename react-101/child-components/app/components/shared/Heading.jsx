var React = require('react');

module.exports = React.createClass({
  render: render
});

function render() {
  return (
    <div>
      <h1>{this.props.text}</h1>
      <hr />
    </div>
  );
}