import './App.css';
import { useState } from 'react';
// import React, { Component } from 'react';
import Statistics from './Components/Statistics/Statistics';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions.jsx';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const percentageOfgood = Math.floor((good / total) * 100);

  return (
    <div className="section">
      <h2 className="title">Please leave your feedback</h2>
      <div className="btn">
        <FeedbackOptions
          options={[
            ['good', () => setGood(good + 1)],
            ['neutral', () => setNeutral(neutral + 1)],
            ['bad', () => setBad(bad + 1)],
          ]}
        />
      </div>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={percentageOfgood}
      />
    </div>
  );
};

export default App;
