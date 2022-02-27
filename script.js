class Message extends React.Component {
  render() {
    return (
      <div>
        Hello People! This is a test of the React.js Code!
      </div>
    );
  }
}

ReactDOM.render(
  <Message />,
  document.getElementById('hello-example')
);
