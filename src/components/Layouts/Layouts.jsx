import React from 'react';
import Header from './Header';

function Layouts({ children }) {
    return (
      <>
        <Header />
        <div>{children}</div>
      </>
    );
  }

export default Layouts;