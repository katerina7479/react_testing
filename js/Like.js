var React = require('react');

var Like = React.createClass({
    getInitialState: function () {
        return {liked: false};
    },
    handleClick: function (e) {
        this.setState({liked: !this.state.liked});
    },
    render: function () {
        var buttonState = this.state.liked ? 'active' : '';
        buttonState = "btn btn-secondary " + buttonState;
        var text = this.state.liked ? 'like' : "haven't liked";

        return (
            <div>
            <p>You {text} this.</p>
            <button className={buttonState} onClick={this.handleClick}>
               Click to toggle.
            </button>
            </div>
        );
    }
});

module.exports = Like;
