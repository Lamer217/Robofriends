import React from 'react';

/* IDK why but this things (below) have to be destructured all the time */
const Searchbox = ({ searchChange }) => {
  return (
    <div className="db pa1">
      <input
        type="search"
        className="pa2 ba b--green bg-lightest-blue br2"
        name="Searchbox"
        id="Searchbox"
        placeholder="Search a Robofriend"
        onChange={searchChange}
      />
    </div>
  );
};

export default Searchbox;
