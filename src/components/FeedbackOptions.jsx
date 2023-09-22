const FeedbackOptions = props => {
  const { options, leaveFeedback } = props;
  return (
    <ul className="fb-list">
      {options.map(el => {
        return (
          <li key={el}>
            <button
              type="button"
              name={el}
              onClick={leaveFeedback}
              className="btn"
            >
              {el}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export { FeedbackOptions };
