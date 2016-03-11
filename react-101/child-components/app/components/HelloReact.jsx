var React = require('react');
var Heading = require('./shared/Heading.jsx');

module.exports = React.createClass({
  render: render
});

function render() {
  return (
    <div>
      <Heading text="Hello, React!" />
      <p>
        I am a React component!
      </p>
    </div>
  );
}