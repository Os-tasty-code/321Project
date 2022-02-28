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
    if (this.state.liked) {
      var rando = parseInt(Math.random() * 3);
      if(rando == 0) {
        return "you are cool";
      } else if (rando == 1) {
        return "you're number one"
      } else {
        return "neat"
      }
    }

    return React.createElement('button', //function for change underneath
      { onClick: () => this.setState({ liked: true }) },
      'Click for a Surprise'
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
