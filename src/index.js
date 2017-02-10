// DO NOT MODIFY

// So we can use React
var React = require('react')
var ReactDOM = require('react-dom')

// Helper functions
// .shuffle() shuffles (randomizes the order of) an array
// e.g. [1,2,3,4,5].shuffle()
// getDeck() gives us an array of cards, represented as strings
// Hint: JavaScript's built-in .splice() function will remove elements from an
// array to create a new array. For example, a "hand" from a deck of cards might
// go something like this:
//
// deck.splice(0,5)
var helpers = require('./components/Helpers')
var getDeck = helpers.getDeck
Array.prototype.shuffle = helpers.shuffle

// Our component classes
var Card = require('./components/Card')

// END OF STUFF TO NOT MODIFY

var App = React.createClass({

  dealButtonClicked: function() {
    //shuffle full deck, save 5 cards as hand
        var hand = getDeck().shuffle().splice(0,5)
        this.setState({
        cardValue1: hand[0],
        cardValue2: hand[1],
        cardValue3: hand[2],
        cardValue4: hand[3],
        cardValue5: hand[4]
      })
    },

  getInitialState: function() {
    //initial state is 5 cards face-down
    return {
     cardValue1: "face_down",
     cardValue2: "face_down",
     cardValue3: "face_down",
     cardValue4: "face_down",
     cardValue5: "face_down"
      }
    },

  render: function() {
    return (
      <div>
        <h1>Welcome to the KIEI-924 Casino!</h1>
        <div className="row">
          <Card cardValue={this.state.cardValue1} />
          <Card cardValue={this.state.cardValue2} />
          <Card cardValue={this.state.cardValue3} />
          <Card cardValue={this.state.cardValue4} />
          <Card cardValue={this.state.cardValue5} />
          <div className="col-sm-2">
            <h1><a href="#" className="btn btn-success" onClick={this.dealButtonClicked}>Deal</a></h1>
          </div>
        </div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"))
