'use strict';

//React.createElement - renders content to the page

class LikeButton extends React.Component {
  /*
    REQUIRED FOR WORKING CONSTRUCTOR
    constructor(props) {
      super(props);
    }
  */  
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  /*
    REQUIRED FOR VISIBLE COMPONENT
    render() {
      React.createElement(*insert name of element*, function for purpose)
    }
  */  
  render() {
    //return(<Button onClick = {location.href = "localhost:9000/game"}></Button>)
    return React.createElement('button', //function for change underneath
      { onClick: () => location.href = '/game'},
      'Click for Tic-Tac-Toe'
    );
  }
}
/*
  INSERTING CONTENT AT SPECIFIC POSITION
  document.querySelector('#like_button_container');

  JavaScript: "" and '' are interchangable
  HTML: # = id (only used once)     . = class (can be used with more than one element)
*/
ReactDOM.render(React.createElement(LikeButton), document.querySelector('#like_button_container'));
