import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export const Modal = ({ largeURL, description, closeModal }) => {
  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  const handlePressESC = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handlePressESC);

    return () => {
      document.removeEventListener('keydown', handlePressESC);
    };
  });

  return (
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={css.modal}>
        <img src={largeURL} alt={description} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeURL: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
