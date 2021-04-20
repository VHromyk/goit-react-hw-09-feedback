import React, { Component } from 'react';
import './styles.css';
import styles from './components/Container/Container.module.css';
import Statistics from './components/Statistics';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions';
import buttons from './components/FeedbackOptions/options';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const currentButton = event.target.textContent;
    if (currentButton === 'Good') {
      this.setState(prevGoodState => ({
        good: prevGoodState.good + 1,
      }));
    } else if (currentButton === 'Neutral') {
      this.setState(prevNeutralState => ({
        neutral: prevNeutralState.neutral + 1,
      }));
    } else if (currentButton === 'Bad') {
      this.setState(prevBadState => ({
        bad: prevBadState.bad + 1,
      }));
    }
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    const percentage = Math.floor((good / totalFeedback) * 100);
    return isNaN(percentage) ? 0 : percentage;
  }

  render() {
    return (
      <>
        <div className={styles.container}>
          <Section title={'Please leave feedback'}>
            <FeedbackOptions
              options={buttons}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>

          <Section title={'Statistics'}>
            {this.countTotalFeedback() < 1 ? (
              <Notification message={'No feedback given'} />
            ) : (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            )}
          </Section>
        </div>
      </>
    );
  }
}
export default App;
