var React = require('react');


var CardItem = React.createClass({

    getInitialState: function () {
        return {side: "front"}
    },

    getCardData: function () {
        var side = this.state.side;
        if (side == "front") {
            return (
                <div className="cardItem-side">
                    {this.props.item.front}
                </div>
            )
        } else {
            return (
                <div className="cardItem-side">
                    {this.props.item.back}
                </div>
            )
        }
    },

    render: function () {
        return (
            <div className="cardItem">
                {this.getCardData()}
            </div>
        )
    }
});

module.exports = CardItem;
