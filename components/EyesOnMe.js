const React = require('react')

class EyesOnMe extends React.Component {
  constuctor(props) {
    super(props)
    this.blurHandler = this.blurHandler.bind(this);
    this.focusHandler = this.focusHandler.bind(this);
  }
  focusHandler() {
    console.log('Good!');
  }
  blurHandler() {
    console.log('Hey! Eyes on me!');
  }
  // onFocus onBlur
  render() {
    return(
      <div>
        <button onFocus={this.focusHandler} onBlur={this.blurHandler}></button>
      </div>
    )
  }
}

module.exports = EyesOnMe;
// In the components/EyesOnMe.js file, create a EyesOnMe React component.
// In that component, render a button.
// On that button, add event handlers that listens for the focus and blur events.
// When the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.
