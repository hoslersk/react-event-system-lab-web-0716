const React = require('react');

class Keypad extends React.Component {
  constuctor(props) {
    super(props)
    // this.state = {}
    this.inputHandler = this.inputHandler.bind(this);
  }
  inputHandler() {
    console.log('Entering password...');
  }
  render() {
    return(
      <div>
        <input type="password" onKeyUp={this.inputHandler} />
      <div>
    );
  }
}

module.exports = Keypad;
// In the components/Keypad.js file, create a Keypad React component.
// In that component, render an input with the right type.
// On that input, add an event handler that listens for the keyUp event.
// When that event fires, use console.log to print out the text 'Entering password...'.
