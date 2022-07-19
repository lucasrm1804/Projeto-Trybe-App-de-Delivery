import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonForm({ datatest, name, disabled }) {
  return (
    <button
      type="button"
      data-testid={ datatest }
      disabled={ disabled }
    >
      {name}
    </button>
  );
}

ButtonForm.propTypes = {
  name: PropTypes.string.isRequired,
  datatest: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};
