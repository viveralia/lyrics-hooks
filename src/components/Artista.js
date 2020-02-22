import React from "react";
import { isEmpty } from "lodash";

const Artista = ({ info }) => {
  // Conditional rendering from within the component
  if (isEmpty(info)) return null;

  // -----------------
  // Component View
  // -----------------
  return (
    <div>
      <h1>Artista</h1>
    </div>
  );
};

export default Artista;
