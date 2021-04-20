import React, { useState } from 'react';
import './styles.css';
import styles from './components/Container/Container.module.css';
import Statistics from './components/Statistics';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions';
import buttons from './components/FeedbackOptions/options';
import Notification from './components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    const currentButton = event.target.textContent;
    if (currentButton === 'Good') {
      setGood(prevGood => prevGood + 1);
    } else if (currentButton === 'Neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    } else if (currentButton === 'Bad') {
      setBad(prevBad => prevBad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    const persentage = Math.floor((good / totalFeedback) * 100);
    return isNaN(persentage) ? 0 : persentage;
  };

  return (
    <div className={styles.container}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={buttons} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title={'Statistics'}>
        {countTotalFeedback() < 1 ? (
          <Notification message={'No feedback given'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}
