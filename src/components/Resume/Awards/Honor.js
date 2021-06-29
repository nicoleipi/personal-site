import React from 'react';
import PropTypes from 'prop-types';

const Honor = ({ data }) => (
  <article className="honors-container">
    <header>
      <h4><a href={data.link}>{data.company}</a></h4>
      <p className="daterange"> {data.daterange}</p>
    </header>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

Honor.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Honor;
