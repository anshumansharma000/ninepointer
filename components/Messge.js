import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ msg, setMessage }) => {
  return (
    <div
      style={{
        padding: '0.5rem 2rem',
        color: 'white',
        backgroundColor: 'grey',
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: '0.2rem',
      }}
    >
      {msg}
      <button
        style={{
          border: 'none',
          background: 'transparent',
          color: 'white',
        }}
        type='button'
        className='close'
        data-dismiss='alert'
        aria-label='Close'
        onClick={() => {
          setMessage('');
        }}
      >
        <span aria-hidden='true' style={{ fontSize: '1.5rem' }}>
          &times;
        </span>
      </button>
    </div>
  );
};

Message.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Message;
