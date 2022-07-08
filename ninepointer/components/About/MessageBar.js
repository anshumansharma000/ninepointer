import React, { Children } from 'react';

const MessageBar = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: '#3EC221',
        color: 'white',
        padding: '0.3rem',
        marginLeft: '-2rem',
        marginRight: '-2rem',
        textAlign: 'center',
      }}
    >
      <p style={{ margin: '0' }}>{children}</p>
    </div>
  );
};

export default MessageBar;
