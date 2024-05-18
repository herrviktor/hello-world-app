import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {  
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Klicka på mig</button>
            </div>
        );
    }
}

//uppgift 2

class timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        };
    };

    render() {  
        return (
            <div>
                <h1>{this.state.time}</h1>
                <button onClick={() => this.setState({time: this.state.time + 1})}>Klicka på mig</button>
            </div>
        );
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({time: this.state.time + 1});
        }, 1000);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    };
}

//uppgift 3

class userProfile extends React.Component {
    staticGetDerivedStateFromProps(props, state) {
        return {
            name: props.name,
            email: props.email,
            bio: props.bio
    }
    };
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.email}</p>
                <p>{this.props.bio}</p>
            </div>
        );
    }
}
