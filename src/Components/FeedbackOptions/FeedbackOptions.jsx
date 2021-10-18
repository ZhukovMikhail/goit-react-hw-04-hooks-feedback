import React from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options }) => {
  return options.map(option => (
    <button
      type="button"
      className={styles.button}
      key={option[0]}
      name={option[0]}
      onClick={option[1]}
    >
      {option}
    </button>
  ));
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
  button: PropTypes.string,
};
