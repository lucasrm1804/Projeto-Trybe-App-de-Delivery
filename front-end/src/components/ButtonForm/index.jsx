import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonForm({ datatest, name }) {
  return (
    <button
      type="button"
      data-testid={ datatest }
    >
      {name}
    </button>
  );
}

ButtonForm.propTypes = {
  name: PropTypes.string.isRequired,
  datatest: PropTypes.string.isRequired,
};
