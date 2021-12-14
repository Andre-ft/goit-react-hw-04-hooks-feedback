import React, { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";
import "./App.css";

export default function App() {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const countFeedback = (stateKey) => setState((prevState) => (prevState[stateKey] += 1));

  const countFeedback = (stateKey) => {
    switch (stateKey) {
      case "good":
        setGood(good + 1);
        break;

      case "neutral":
        setNeutral(neutral + 1);
        break;

      case "bad":
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    // return Object.values(this.state).reduce((acc, item) => acc + item, 0);
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    // const { good, neutral, bad } = this.state;
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  const totalFeedbacks = countTotalFeedback();
  const positivFeedbackPercent = countPositiveFeedbackPercentage();

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={countFeedback}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedbacks ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbacks}
            positiveFeedback={positivFeedbackPercent}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
