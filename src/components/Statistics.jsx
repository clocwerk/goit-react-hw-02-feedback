const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const emoji = positivePercentage < 50 ? '👎' : '👍';
  console.log(emoji);
  return (
    <ul className="stat-list">
      <li key="1">
        <p>Good: {good}</p>
      </li>
      <li key="2">
        <p>Neutral: {neutral}</p>
      </li>
      <li key="3">
        <p>Bad: {bad}</p>
      </li>
      <li key="4">
        <p>Total: {total}</p>
      </li>
      <li key="5">
        <p>
          Positive Feedback: {positivePercentage}%{emoji}
        </p>
      </li>
    </ul>
  );
};

export { Statistics };
