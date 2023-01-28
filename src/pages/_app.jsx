import React from 'react';
import PropTypes from 'prop-types';
import 'styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.instanceOf(Object),
};

App.defaultProps = {
  pageProps: {},
};

export default App;
