import React from 'react';

/* PROPS are used to give access to a property from
a parent element to its children */
const Scroll = props => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        height: '70vh',
        boxShadow: '0 -1px 10px  #10ff51',
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
