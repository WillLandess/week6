var React = require('react')

var Card = React.createClass({
  render: function() {
    return (
      <div className="col-sm-2">
        <h1><img className="img-responsive" role="presentation"
          src={"http://golearntocode.com/images/cards/" + this.props.cardValue + ".png"} /></h1>
      </div>
    )
  }

})

module.exports = Card
