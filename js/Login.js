var React = require('react');

var Login = React.createClass({

    getInitialState: function () {
        return {username: '', pass: ''};
    },
    onSubmit: function (){
        console.log(this.state.username, this.state.pass);
    },

    onChange: function(e){
        this.setState({[e.target.name]: e.target.value})
    },

    render: function () {
        return (
        <form onSubmit={this.onSubmit}>
            <input name="username" type="text" value={this.state.username} placeholder="Username" onChange={this.onChange}/>
            <input name="pass" type="password" value={this.state.pass} placeholder="Password" onChange={this.OnChange}/>

            <button type="submit">Login</button>
        </form>
        );
    }
});

module.exports = Login;
