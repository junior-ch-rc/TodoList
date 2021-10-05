import React from 'react';
import './index.css';

interface Props {}

interface State{
  date: Date;
};

class Clock extends React.Component<Props, State> {
  timerID: any;

  constructor(props: Props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 
      1000
    );
  }

  componentDidUpdate() {
    document.title =  this.state.date.toLocaleTimeString();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({date: new Date()});
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row justify-content-center clock">
            <div>
              <h1>Now: </h1>
              <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
          </div>
        </div>

        <footer className="footer mt-auto py-2">
            <div className="container">
                <p>App desenvolvido por <a href="https://www.linkedin.com/in/ricardo-junior-cunha/" target="_blank" rel="noreferrer">Junior Cunha</a></p>
            </div>
        </footer>
      </>
    );
  }
}

export default Clock;
