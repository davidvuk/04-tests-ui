// import React, { Fragment } from 'react'
import React from 'react';
import PropTypes from 'prop-types';


const FirstApp = ({ saludo, subtitulo }) => {
  // const saludo = 'hello world!';
  // const saludo = [1, 2, 3, 4];
  // const saludo = { name: 'david' };

  // console.log(props);

  return (
    <>
      {/* <pre>{JSON.stringify(saludo, '', 3)}</pre> */}
      {/* <h1>{saludo}</h1> */}
      <h1>{saludo}</h1>

      <p>{subtitulo}</p>
    </>
  );
}

// Propiedades de los props
FirstApp.propTypes = {
  saludo: PropTypes.string.isRequired
}

// Valores por defecto de los props
FirstApp.defaultProps = {
  subtitulo: 'Soy Vegeta'
}

export default FirstApp;
