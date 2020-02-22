import React from "react";
import { isEmpty } from "lodash";

const Cancion = ({ letra }) => {
  // Conditional rendering from within the component
  if (isEmpty(letra)) return null;

  // -----------------
  // Component View
  // -----------------
  return (
    <>
      <h2>Letra de la Canción</h2>
      <p className="letra">{letra}</p>
    </>
  );
};

export default Cancion;
