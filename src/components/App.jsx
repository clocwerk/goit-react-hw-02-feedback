import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  increment = e => {
    const { name } = e.target;
    this.setState(ps => {
      return { [name]: ps[name] + 1 };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const positive = Math.round(
      (this.state.good * 100) / this.countTotalFeedback()
    );

    return positive;
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Pls leave feedback"></Section>
        <FeedbackOptions
          options={Object.keys(this.state)}
          leaveFeedback={this.increment}
        ></FeedbackOptions>
        <Section title="Statistics">
          {!this.countTotalFeedback() ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          )}
        </Section>
      </>
    );
  }
}
export { App };
