import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  if (total !== 0) {
    return (
      <div className={styles.stats}>
        <h2 className={styles.title}>Statistics:</h2>
        <p>
          Good:<span>{good}</span>
        </p>
        <p>
          Neutral:<span>{neutral}</span>
        </p>
        <p>
          Bad:<span>{bad}</span>
        </p>
        <p>
          Total:<span>{total}</span>
        </p>
        <p>
          positive feedback:<span>{positivePercentage}%</span>
        </p>
      </div>
    );
  } else {
    return <h2 className={styles.title}> No feedback given</h2>;
  }
}
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  stats: PropTypes.string,
  title: PropTypes.string,
};
