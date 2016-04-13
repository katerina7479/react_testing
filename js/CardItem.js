var React = require('react');


var CardItem = React.createClass({

    getInitialState: function () {
        return {front: true}
    },

    getCardData: function () {
        var front = this.state.front;
        if (front) {
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

    handleClick: function () {
        this.setState({front: !this.state.front});
    },

    render: function () {
        return (
            <div className="cardItem">
                {this.getCardData()}

                <div className="cardItem-toggleButton" onClick={this.handleClick}>
                    Click to toggle.
                </div>
            </div>
        )
    }
});

module.exports = CardItem;
