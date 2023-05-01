import PropTypes from 'prop-types';
import css from './Section.module.css';
function Section({ title, children }) {
  return (
    <section className={css.section}>
      <h2 className={css.title}>Please leave feedback{title}</h2>
      {children}
    </section>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default Section;
