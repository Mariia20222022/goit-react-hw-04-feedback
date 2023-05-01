import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positiveFeedback }) {
  return (
    <div>
      <h2 className={css.title}>Statistics</h2>
      <div className={css.title__container}>
        <span className={css.statistic__title}>Good:{good}</span>
        <span className={css.statistic__title}>Neutral:{neutral}</span>
        <span className={css.statistic__title}>Bad:{bad}</span>
        <span className={css.statistic__title}>Total:{total}</span>
        <span className={css.statistic__title}>
          Positive feedback:{positiveFeedback}%
        </span>
      </div>
    </div>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
export default Statistics;
