import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }
  render() {
    return (<div className="App-clock" >
        {this.state.date}  {this.state.time}
    </div>
    );
  }
}

export default Clock;