import React from 'react';
import PropTypes from 'prop-types';

import Honor from './Awards/Honor';

const Awards = ({ data }) => (
  <div className="awards">
    <div className="link-to" id="awards" />
    <div className="title">
      <h3>Honors/Awards</h3>
    </div>
    {data.map((honor) => (
      <Honor
        data={honor}
        key={honor.company}
      />
    ))}
  </div>
);

Awards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Awards.defaultProps = {
  data: [],
};

export default Awards;
