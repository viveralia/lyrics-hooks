import React, { useState } from "react";

const Formulario = ({ guardarBusquedaLetra }) => {
  // -----------------
  // Hooks
  // -----------------
  const [busqueda, guardarBusqueda] = useState({
    artista: "",
    cancion: ""
  });
  const [error, guardarError] = useState(false);

  // -----------------
  // Helpers
  // -----------------
  const handleChange = e => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
  };
  const { artista, cancion } = busqueda;
  const buscarInformacion = e => {
    e.preventDefault();
    if (!artista.trim() || !cancion.trim()) {
      guardarError(true);
      return;
    }
    guardarError(false);
    guardarBusquedaLetra(busqueda);
  };

  // -----------------
  // Component View
  // -----------------
  return (
    <div className="bg-info">
      {error && (
        <p className="alert alert-danger text-center rounded-0 p-2">
          Necesitas llenar ambos campos
        </p>
      )}
      <div className="container">
        <div className="row">
          <form
            className="col card text-white border-0 bg-transparent mb-5 pt-5 pb-2"
            onSubmit={buscarInformacion}
          >
            <fieldset>
              <legend className="text-center mb-5">
                Buscador letras canciones
              </legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Nombre del artista"
                      onChange={handleChange}
                      value={artista}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canción</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Nombre de la cancion"
                      onChange={handleChange}
                      value={cancion}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
