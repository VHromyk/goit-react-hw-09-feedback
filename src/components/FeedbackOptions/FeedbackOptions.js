import React from 'react';
import styles from './FeedbackOptions.module.css';
import propTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={styles.list}>
    {options.map(item => (
      <li key={item.id}>
        <button onClick={onLeaveFeedback}>{item.label}</button>
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  options: propTypes.array,
  onLeaveFeedback: propTypes.func,
};

export default FeedbackOptions;
