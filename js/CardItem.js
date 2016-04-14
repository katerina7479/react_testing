var React = require('react');


var CardItem = React.createClass({

    getInitialState: function () {
        return {front: true}
    },

    getCardData: function () {
        var front = this.state.front;
        var side = front ? this.props.item.front : this.props.item.back;

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h1 className="panel-title">{this.props.item.id}</h1>
                </div>
                <div className="panel panel-body">
                    {side}
                </div>
            </div>
        )

    },

    handleClick: function () {
        this.setState({front: !this.state.front});
    },

    render: function () {
        return (
            <div className="col-sm-4 cardItem">
                {this.getCardData()}

                <button className="btn cardItem-toggleButton" onClick={this.handleClick}>
                    Click to toggle.
                </button>
            </div>
        )
    }
});

module.exports = CardItem;
