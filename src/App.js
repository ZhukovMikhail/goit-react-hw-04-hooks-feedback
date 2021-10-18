import './App.css';
import React, { Component } from 'react';
import Statistics from './Components/Statistics/Statistics';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions.jsx';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  compValue = Object.keys(this.state)[0];
  data = {
    compValue: 0,
    total: 0,
    percentageOfcompValue: 0,
  };

  hendleFeedback = e => {
    const { name } = e.currentTarget;
    console.log(name);
    this.setState(prev => ({ [name]: prev[name] + 1 }));
    if (name === this.compValue) {
      this.data.compValue += 1;
    }
    this.hendleTotalValue();
    this.onpercentageOfcompValue();
  };

  hendleTotalValue = e => (this.data.total += 1);

  onpercentageOfcompValue = e => {
    this.data.percentageOfcompValue = Math.floor(
      (this.data.compValue / this.data.total) * 100,
    );
    console.log('good', [Object.keys(this.state)[0]]);
    console.log('total', this.data.total);
    console.log('percentageOfcompValue', this.data.percentageOfcompValue);
  };

  render() {
    return (
      <div className="section">
        <h2 className="title">Please leave your feedback</h2>
        <div className="btn">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.hendleFeedback}
          />
        </div>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.data.total}
          positivePercentage={this.data.percentageOfcompValue}
        />
      </div>
    );
  }
}

export default App;
